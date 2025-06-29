// src/components/ArticleCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import type { Article } from "@/types/article";
// このコンポーネントが受け取るPropsの型を定義します
type ArticleCardProps = {
    article: Article;
}
// Propsとして`article`オブジェクトを受け取るように変更します
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    // リンク先を記事のIDに応じた動的なものに変更します
    <Link href={`/posts/${article.id}`} className="block group">
      <div className="overflow-hidden rounded-lg border bg-light-bg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl dark:border-dark-border dark:bg-dark-bg">
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
    </Link>
  );
}