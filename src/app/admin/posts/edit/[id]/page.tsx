// src/app/admin/posts/edit/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { dummyArticles } from "@/data/article";
import { ArrowLeft } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

// ページの引数に `params` を追加
export default function EditPostPage({ params }: { params: { id: string } }) {
  // 編集対象の記事データを元に、各stateを初期化
  const article = dummyArticles.find(a => a.id === params.id);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  // テーマの状態を取得
  const { theme } = useTheme();
  
  // マウント状態を管理
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // 記事データが見つかったら、その内容でstateを更新
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setContent(article.content);
    }
  }, [article]);

  // マウント前、または記事が見つからない場合は何も表示しない
  if (!mounted) {
    return null; 
  }

  if (!article) {
    // 記事が見つからなければ404ページを表示
    return notFound();
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
            記事を編集
        </h1>
        <LoadingLink
            href="/admin/posts"
            className="flex items-center gap-2 rounded-md border bg-gray-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
            <ArrowLeft className="h-4 w-4" />
                一覧に戻る
        </LoadingLink>
      </div>

      <form className="space-y-6">
        {/* タイトル */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
          <div className="mt-1">
            <input
              type="text"
              name="title"
              id="title"
              required
              className="block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700"
              placeholder="記事のタイトル"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* カテゴリー */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium">カテゴリー</label>
          <div className="mt-1">
            <input
              type="text"
              name="category"
              id="category"
              required
              className="block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700"
              placeholder="例: Web開発"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* 本文 (Markdownエディタ) */}
        <div>
          <label className="block text-sm font-medium">本文 (Markdown)</label>
          <div className="mt-1" data-color-mode={theme}>
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || "")}
              height={500}
              preview="live"
            />
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            キャンセル
          </button>
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-light-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700">
            更新する
          </button>
        </div>
      </form>
    </div>
  );
}