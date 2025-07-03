// src/types/article.ts

export type Article = {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  description: string;
  content: string; // 記事の本文（Markdown形式）
};