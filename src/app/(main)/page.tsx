// src/app/page.tsx

import { ArticleCard } from "@/components/ArticleCard";
import { dummyArticles, dummyPopularArticles } from "@/data/article";
import type { Article } from "@/types/article";

// --- ステップ1: 仮の記事データを作成 ---
// 本来はデータベースなどから取得しますが、ここでは仮の配列を用意します。


export default function Home() {
  return (
    // containerクラスなどで中央寄せと最大幅を設定します
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      
      {/* --- 新着記事セクション --- */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
          新着記事
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

        </div>
      </section>

    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
        人気記事ランキング
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyPopularArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              rank={index + 1} // 配列のインデックス+1を順位として渡す
            />
          ))}
      </div>
    </section>
      
    </div>
  );
}