// src/app/admin/posts/new/page.tsx
"use client";

import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { ArrowLeft } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("**ここから**記事を書き始めましょう！");

  // テーマの状態を取得
  const { theme } = useTheme();
  
  // マウント状態を管理（テーマのちらつき防止）
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
          新しい記事を作成
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

        {/* 本文 (新しいMarkdownエディタ) */}
        <div>
          <label className="block text-sm font-medium">本文 (Markdown)</label>
          <div className="mt-1" data-color-mode={theme}>
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || "")}
              height={500}
              preview="live" // write, preview, live の3種類が選べる
            />
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            下書き保存
          </button>
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-light-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700">
            公開する
          </button>
        </div>
      </form>
    </div>
  );
}