-- backend/schema.sql

-- もし既にarticlesテーブルが存在していたら削除する
DROP TABLE IF EXISTS articles;

-- articlesテーブルの作成
CREATE TABLE articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL
);