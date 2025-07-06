// src/app/(main)/posts/[id]/page.tsx

import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Article } from "@/types/article";

// IDを指定して、バックエンドから単一の記事データを取得する関数
async function getArticleById(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
      cache: 'no-store' 
    });

    // 記事が見つからない場合(404)は、nullを返す
    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error('Failed to fetch article');
    }
    return res.json();
  } catch (error) {
    console.error("APIからの個別記事データ取得に失敗しました:", error);
    return null; // エラーが発生した場合もnullを返す
  }
}

// ページコンポーネントを非同期関数に変更
export default async function ArticlePostPage({ params }: { params: { id: string } }) {
  // URLのIDを使って、バックエンドから記事データを取得
  const article: Article | null = await getArticleById(params.id);

  // 記事データが取得できなかった場合、404ページを表示
  if (!article) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-screen-lg px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
        {article.title}
      </h1>

      <div className="mb-8 flex items-center space-x-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('ja-JP')}</time>
        </div>
        <div className="flex items-center space-x-1">
          <Tag className="h-4 w-4" />
          <span>{article.category}</span>
        </div>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}