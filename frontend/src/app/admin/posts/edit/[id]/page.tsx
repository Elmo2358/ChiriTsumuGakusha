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
        if (!res.ok) {
          return notFound(); // 記事がなければ404
        }
        const article: Article = await res.json();
        setTitle(article.title);
        setCategory(article.category);
        setContent(article.content);
        setMounted(true);
      } catch (error) {
        console.error(error);
        return notFound();
      }
    };
    fetchArticle();
  }, [params.id]);

  // フォーム送信（更新）処理
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
        <LoadingLink href="/admin/posts" className="flex items-center gap-2 ...">
          <ArrowLeft className="h-4 w-4" />
          一覧に戻る
        </LoadingLink>
      </div>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* ... (フォームの各入力欄はNewPostPageと同じなので省略) ... */}
        {/* タイトル */}
        <div>
          <label htmlFor="title">タイトル</label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="block w-full ..."/>
        </div>
        {/* カテゴリー */}
        <div>
          <label htmlFor="category">カテゴリー</label>
          <input id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="block w-full ..."/>
        </div>
        {/* 本文 */}
        <div>
          <label>本文 (Markdown)</label>
          <div data-color-mode={theme}>
            <MDEditor value={content} onChange={(val) => setContent(val || "")} height={500} preview="live" />
          </div>
        </div>
        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="...">キャンセル</button>
          <button type="submit" className="...">更新する</button>
        </div>
      </form>
    </div>
  );
}