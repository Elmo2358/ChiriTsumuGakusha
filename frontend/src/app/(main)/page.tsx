// src/app/(main)/page.tsx

import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/types/article";

// データを取得するための非同期関数
async function getArticles() {
  try {
    const res = await fetch('http://localhost:5000/api/articles', {
      // キャッシュを利用せずに、常に最新のデータを取得する設定
      cache: 'no-store' 
    });

    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    return res.json();
  } catch (error) {
    console.error("APIからの記事データ取得に失敗しました:", error);
    return []; // エラーが発生した場合は空の配列を返す
  }
}


// Homeコンポーネントを非同期関数に変更
export default async function Home() {
  // ページがリクエストされたタイミングで、サーバーがデータを取得
  const articles: Article[] = await getArticles();

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      
      {/* --- 新着記事セクション --- */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
          新着記事
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <p>記事がありません。</p>
          )}
        </div>
      </section>

      {/* --- 人気記事ランキングセクション --- */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
          人気記事ランキング
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 現時点では人気記事用のAPIがないため、新着記事と同じデータをランキングとして表示します。
            将来的には、閲覧数に基づいたデータを返す専用APIを作成します。
          */}
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                rank={index + 1}
              />
            ))
          ) : (
            <p>記事がありません。</p>
          )}
        </div>
      </section>
      
    </div>
  );
}