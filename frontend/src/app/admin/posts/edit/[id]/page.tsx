// frontend/src/app/admin/posts/edit/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, notFound } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { ArrowLeft } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";
import type { Article } from "@/types/article";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ページ読み込み時にAPIから記事データを取得
    const fetchArticle = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/articles/${params.id}`);
        if (res.status === 404) {
          return notFound(); // 記事がなければ404
        }
        if (!res.ok) {
          throw new Error("Failed to fetch article");
        }
        const article: Article = await res.json();
        setTitle(article.title);
        setCategory(article.category);
        setContent(article.content);
      } catch (error) {
        console.error(error);
        alert("データの読み込みに失敗しました。");
        router.push("/admin/posts");
      } finally {
        setMounted(true);
      }
    };
    fetchArticle();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedArticle = { title, category, content };

    try {
      const res = await fetch(`http://localhost:5000/api/articles/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedArticle),
      });

      if (!res.ok) throw new Error('記事の更新に失敗しました。');

      alert('記事を更新しました！');
      router.push('/admin/posts');
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました。');
    }
  };

  if (!mounted) {
    return null; // データ読み込み中は何も表示しない
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">記事を編集</h1>
        <LoadingLink href="/admin/posts" className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-dark-text-secondary dark:hover:bg-gray-600">
          <ArrowLeft className="h-4 w-4" />
          一覧に戻る
        </LoadingLink>
      </div>
      
      {/* ↓↓↓ formタグにonSubmitを追加 ↓↓↓ */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* タイトル */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700" />
        </div>
        {/* カテゴリー */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium">カテゴリー</label>
          <input id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700" />
        </div>
        {/* 本文 */}
        <div>
          <label className="block text-sm font-medium">本文 (Markdown)</label>
          <div className="mt-1" data-color-mode={theme}>
            <MDEditor value={content} onChange={(val) => setContent(val || "")} height={500} preview="live" />
          </div>
        </div>
        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">キャンセル</button>
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-light-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700">更新する</button>
        </div>
      </form>
    </div>
  );
}