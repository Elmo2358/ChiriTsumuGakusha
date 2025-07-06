# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

dummy_articles = [
    {
        "id": "how-to-build-blog-with-nextjs",
        "title": "Next.js と Tailwind CSS でブログを構築する",
        "date": "2025-07-06",
        "category": "Web開発",
        "imageUrl": "/images/nextjs-card.png",
        "description": "最新の技術スタックを使って、モダンで高速なブログサイトをゼロから作成する方法を解説します。",
        "content": "## はじめに\n\nこの記事では、Next.jsとTailwind CSSを使って、モダンなブログサイトを構築する手順を解説します。\n\n### 使用する技術\n- Next.js (App Router)\n- TypeScript\n- Tailwind CSS\n\n```javascript\n// サンプルコード\nconsole.log(\"Hello, World!\");\n```"
    },
    {
        "id": "atcoder-beginner-guide",
        "title": "AtCoder初心者が緑になるまでにやったこと",
        "date": "2025-07-06",
        "category": "AtCoder",
        "imageUrl": "/images/atcoder-card.png",
        "description": "競プロ初心者が効率的に学習を進めるためのロードマップと、コンテストで結果を出すためのコツを紹介。",
        "content": "## AtCoderとは\nAtCoderは、競技プログラミングのコンテストサイトです。\n\n- **ABC (AtCoder Beginner Contest):** 初心者向け\n- **ARC (AtCoder Regular Contest):** 中級者向け\n- **AGC (AtCoder Grand Contest):** 上級者向け"
    },
    {
        "id": "toeic-score-up-strategy",
        "title": "TOEIC L&R Test 900点を超えるための学習戦略",
        "date": "2025-07-06",
        "category": "TOEIC",
        "imageUrl": "/images/toeic-card.png",
        "description": "単語学習から模試の活用法まで、スコアを最大化するための具体的な勉強法と時間管理術を公開します。",
        "content": "## TOEIC学習の重要性\nTOEICは英語力を測るための世界共通のテストです。"
    }
]

@app.route("/api/articles")
def get_articles():
    return jsonify(dummy_articles)

@app.route("/api/articles/<string:article_id>")
def get_article(article_id):
    article = next((article for article in dummy_articles if article["id"] == article_id), None)
    if article:
        return jsonify(article)
    else:
        return jsonify({"error": "Article not found"}), 404

@app.route("/api/articles", methods=['POST'])
def create_article():
    new_article_data = request.get_json()
    new_article = {
        "id": str(uuid.uuid4()),
        "title": new_article_data.get('title'),
        "date": "2025-07-06",
        "category": new_article_data.get('category'),
        "imageUrl": "/images/default-card.png",
        "description": new_article_data.get('content', '')[:50] + "...",
        "content": new_article_data.get('content')
    }
    dummy_articles.insert(0, new_article)
    print("新しい記事が作成されました:", new_article)
    return jsonify(new_article), 201