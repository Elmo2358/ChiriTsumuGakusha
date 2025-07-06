// src/components/ArticleCard.tsx

import Image from "next/image";
import { LoadingLink } from "@/components/LoadingLink";
import { Calendar, Tag, Crown } from "lucide-react";
import type { Article } from "@/types/article";
// このコンポーネントが受け取るPropsの型を定義します
type ArticleCardProps = {
    article: Article;
    rank?: number;
}
// Propsとして`article`オブジェクトを受け取るように変更します
export function ArticleCard({ article, rank }: ArticleCardProps) {
// 順位に応じた王冠の色を定義
  const crownColor =
    rank === 1 ? "text-yellow-400" :
    rank === 2 ? "text-slate-400" :
    rank === 3 ? "text-yellow-600" :
    "text-transparent"; // 4位以下は透明
  return (
    // リンク先を記事のIDに応じた動的なものに変更します
    <LoadingLink href={`/posts/${article.id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg border bg-light-bg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl dark:border-dark-border dark:bg-dark-bg">
        {rank && rank <= 3 && (
          <div className="absolute top-0 left-0 z-10 flex items-center space-x-1 bg-black/60 px-2.5 py-1 rounded-br-lg">
            <Crown className={`h-5 w-5 ${crownColor}`} />
            <span className="text-lg font-bold text-white">{rank}</span>
          </div>
        )}
        {/* 画像セクション */}
        <div className="relative aspect-video w-full">
          <Image
            src={article.imageUrl} // 仮の画像URLをPropsの値に置き換え
            alt={article.title}    // altテキストも記事タイトルに
            fill
            className="object-cover"
          />
        </div>

        {/* コンテンツセクション */}
        <div className="p-4 sm:p-5">
          {/* カテゴリ */}
          <div className="flex items-center space-x-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <Tag className="h-4 w-4" />
            <span>{article.category}</span> {/* カテゴリをPropsの値に */}
          </div>

          {/* タイトル */}
          <h3 className="mt-2 text-lg font-bold leading-tight text-light-text-primary transition-colors group-hover:text-light-accent dark:text-dark-text-primary dark:group-hover:text-dark-accent">
            {article.title} {/* タイトルをPropsの値に */}
          </h3>
          
          {/* 説明文 */}
          <p className="mt-2 text-sm text-light-text-primary/90 line-clamp-2 dark:text-dark-text-primary/90">
            {article.description} {/* 説明文をPropsの値に */}
          </p>

          {/* 日付 */}
          <div className="mt-4 flex items-center space-x-1 text-xs text-light-text-secondary dark:text-dark-text-secondary">
            <Calendar className="h-3.5 w-3.5" />
            {/* 日付をPropsの値に */}
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('ja-JP')}</time>
          </div>
        </div>
      </div>
    </LoadingLink>
  );
}