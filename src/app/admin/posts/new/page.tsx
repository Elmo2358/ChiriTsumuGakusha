// src/app/admin/posts/new/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { ArrowLeft } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("**ここから**記事を書き始めましょう！");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const handleSubmit = async (e: React.FormEvent) => {
    // ↓↓↓ 1. この行が重要です ↓↓↓
    e.preventDefault(); 

    const newArticle = { title, category, content };

    try {
      const res = await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
      });

      if (!res.ok) throw new Error('記事の作成に失敗しました。');

      alert('記事が作成されました！');
      router.push('/admin/posts');
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました。');
    }
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          新しい記事を作成
        </h1>
        <LoadingLink
          href="/admin/posts"
          className="flex items-center gap-2 rounded-md border bg-gray-50 px-4 py-2 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          一覧に戻る
        </LoadingLink>
      </div>
      
      {/* ↓↓↓ 2. formタグにこのonSubmitが重要です ↓↓↓ */}
      <form className="space-y-6" onSubmit={handleSubmit}>
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