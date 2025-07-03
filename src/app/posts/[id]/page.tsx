import { notFound } from "next/navigation";
import { dummyArticles } from "@/data/article";
import { Calendar, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

// Next.jsがURLの `[id]` 部分を `params` オブジェクトとして渡してくれる
export default function ArticlePostPage({ params }: { params: { id: string } }) {
    // URLのIDを使って、記事の配列から該当する記事を探す
    const article = dummyArticles.find((article) => article.id === params.id);

    // もし記事が見つからなかったら、404ページを表示する。
    if (!article) {
        notFound();
    }

    return (
      <article className="container mx-auto max-w-screen-lg px-4 py-8">
      {/* 記事タイトル */}
      <h1 className="text-3xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
        {article.title}
      </h1>

      {/* 日付とカテゴリー */}
      <div className="flex items-center space-x-4 mb-8 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('ja-JP')}</time>
        </div>
        <div className="flex items-center space-x-1">
          <Tag className="h-4 w-4" />
          <span>{article.category}</span>
        </div>
      </div>

      {/* 本文（ここは次のステップでMarkdownを表示するように変更します） */}
      <div className="prose max-w-none dark:prose-invert">
         <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
    );
}