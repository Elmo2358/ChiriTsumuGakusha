// src/app/api-test/page.tsx
"use client";

import { useState, useEffect } from "react";

// 受け取るデータの型を定義
type Article = {
  id: string;
  title: string;
  content: string;
};

export default function ApiTestPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // バックエンドAPIにリクエストを送る
    fetch('http://localhost:5000/api/articles')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('データの取得に失敗しました。バックエンドサーバーは起動していますか？');
        setLoading(false);
      });
  }, []); // 空の配列を渡すことで、ページが最初に読み込まれた時に一度だけ実行

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">API通信テスト</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="border-b py-2">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}