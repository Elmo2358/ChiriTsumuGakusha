# backend/app.py
import sqlite3
import uuid
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# データベース接続を取得するヘルパー関数
def get_db_connection():
    conn = sqlite3.connect('database.db')
    # 結果を辞書形式で受け取れるようにする
    conn.row_factory = sqlite3.Row
    return conn

# --- これまでのAPIをすべてデータベース対応に書き換える ---

# 【Read】全記事を取得するAPI
@app.route("/api/articles", methods=['GET'])
def get_articles():
    conn = get_db_connection()
    articles = conn.execute('SELECT * FROM articles ORDER BY date DESC').fetchall()
    conn.close()
    # fetchall()の結果をリスト内の辞書に変換
    return jsonify([dict(row) for row in articles])

# 【Read】単一の記事を取得するAPI
@app.route("/api/articles/<string:article_id>", methods=['GET'])
def get_article(article_id):
    conn = get_db_connection()
    article = conn.execute('SELECT * FROM articles WHERE id = ?', (article_id,)).fetchone()
    conn.close()
    if article is None:
        return jsonify({"error": "Article not found"}), 404
    return jsonify(dict(article))

# 【Create】新しい記事を作成するAPI
@app.route("/api/articles", methods=['POST'])
def create_article():
    new_article_data = request.get_json()
    conn = get_db_connection()
    new_id = str(uuid.uuid4())
    # データベースに新しい記事を挿入
    conn.execute('INSERT INTO articles (id, title, category, content, date, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
                 (new_id, 
                  new_article_data['title'], 
                  new_article_data['category'], 
                  new_article_data['content'],
                  "2025-07-06", # 仮の日付
                  "/images/default-card.png", # 仮の画像
                  new_article_data.get('content', '')[:50] + "..."
                  ))
    conn.commit()
    # 作成した記事をデータベースから取得して返す
    created_article = conn.execute('SELECT * FROM articles WHERE id = ?', (new_id,)).fetchone()
    conn.close()
    return jsonify(dict(created_article)), 201

# 【Update】記事を更新するAPI
@app.route("/api/articles/<string:article_id>", methods=['PUT'])
def update_article(article_id):
    updated_data = request.get_json()
    conn = get_db_connection()
    
    # 先に、更新対象の記事が存在するか確認する
    article = conn.execute('SELECT * FROM articles WHERE id = ?', (article_id,)).fetchone()

    if article:
        # 記事が見つかった場合、内容を更新
        conn.execute('UPDATE articles SET title = ?, category = ?, content = ?, description = ? WHERE id = ?',
                     (updated_data['title'], 
                      updated_data['category'], 
                      updated_data['content'],
                      updated_data.get('content', '')[:50] + "...",
                      article_id))
        conn.commit()
        
        # 更新した記事をデータベースから取得して返す
        updated_article = conn.execute('SELECT * FROM articles WHERE id = ?', (article_id,)).fetchone()
        conn.close()
        return jsonify(dict(updated_article))
    else:
        # 記事が見つからなかった場合、404エラーを返す
        conn.close()
        return jsonify({"error": "Article not found"}), 404

# 【Delete】記事を削除するAPI
@app.route("/api/articles/<string:article_id>", methods=['DELETE'])
def delete_article(article_id):
    conn = get_db_connection()
    # データベースから記事を削除
    conn.execute('DELETE FROM articles WHERE id = ?', (article_id,))
    conn.commit()
    conn.close()
    return jsonify({"success": True, "message": "Article deleted"})