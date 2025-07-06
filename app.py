# app.py
from flask import Flask

# Flaskアプリケーションのインスタンスを作成
app = Flask(__name__)

# ルートURL ("/") にアクセスがあった場合の処理を定義
@app.route("/")
def hello_world():
    return "<p>Hello, Backend World!</p>"