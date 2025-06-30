// src/app/page.tsx

import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/types/article";

// --- ステップ1: 仮の記事データを作成 ---
// 本来はデータベースなどから取得しますが、ここでは仮の配列を用意します。
const dummyArticles: Article[] = [
  {
    id: 'how-to-build-blog-with-nextjs',
    title: 'Next.js と Tailwind CSS でブログを構築する',
    date: '2025-06-30',
    category: 'Web開発',
    imageUrl: '/images/nextjs-card.png',
    description: '最新の技術スタックを使って、モダンで高速なブログサイトをゼロから作成する方法を解説します。',
  },
  {
    id: 'atcoder-beginner-guide',
    title: 'AtCoder初心者が緑になるまでにやったこと',
    date: '2025-06-28',
    category: 'AtCoder',
    imageUrl: '/images/atcoder-card.png',
    description: '競プロ初心者が効率的に学習を進めるためのロードマップと、コンテストで結果を出すためのコツを紹介。',
  },
  {
    id: 'toeic-score-up-strategy',
    title: 'TOEIC L&R Test 900点を超えるための学習戦略',
    date: '2025-06-25',
    category: 'TOEIC',
    imageUrl: '/images/toeic-card.png',
    description: '単語学習から模試の活用法まで、スコアを最大化するための具体的な勉強法と時間管理術を公開します。',
  },
  // 新しい記事をここに追加できます
];

// 人気記事用の仮データ（後で使います）
const dummyPopularArticles: Article[] = [
  // 人気順に並び替えたデータ
  {
    id: 'atcoder-beginner-guide',
    title: 'AtCoder初心者が緑になるまでにやったこと',
    date: '2025-06-28',
    category: 'AtCoder',
    imageUrl: '/images/atcoder-card.png',
    description: '競プロ初心者が効率的に学習を進めるためのロードマップと、コンテストで結果を出すためのコツを紹介。',
  },
  {
    id: 'how-to-build-blog-with-nextjs',
    title: 'Next.js と Tailwind CSS でブログを構築する',
    date: '2025-06-30',
    category: 'Web開発',
    imageUrl: '/images/nextjs-card.png',
    description: '最新の技術スタックを使って、モダンで高速なブログサイトをゼロから作成する方法を解説します。',
  },
  {
    id: 'toeic-score-up-strategy',
    title: 'TOEIC L&R Test 900点を超えるための学習戦略',
    date: '2025-06-25',
    category: 'TOEIC',
    imageUrl: '/images/toeic-card.png',
    description: '単語学習から模試の活用法まで、スコアを最大化するための具体的な勉強法と時間管理術を公開します。',
  },
]

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