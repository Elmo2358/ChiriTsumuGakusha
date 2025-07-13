# backend/init_db.py
import sqlite3

# データベースに接続（ファイルが存在しない場合は新規作成される）
connection = sqlite3.connect('database.db')

# schema.sqlファイルを開いて読み込む
with open('schema.sql', 'r', encoding='utf-8') as f:
    connection.executescript(f.read())

# 変更をコミット（保存）して接続を閉じる
connection.commit()
connection.close()

print("データベースが正常に初期化されました。")