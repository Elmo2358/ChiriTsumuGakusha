// src/app/search/page.tsx
"use client"; // searchParamsを扱うため、クライアントコンポーネントにする

import { useSearchParams } from "next/navigation";
import { dummyArticles } from "@/data/article";
import { ArticleCard } from "@/components/ArticleCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // URLの ?q= の部分を取得

  // 検索クエリに一致する記事をフィルタリング
  const filteredArticles = query
    ? dummyArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      <section>
        <h2 className="mb-6 text-2xl font-bold">
          検索結果: <span className="text-light-accent dark:text-dark-accent">{query}</span>
        </h2>
        
        {/* 検索結果の表示 */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p>「{query}」に一致する記事は見つかりませんでした。</p>
        )}
      </section>
    </div>
  );
}