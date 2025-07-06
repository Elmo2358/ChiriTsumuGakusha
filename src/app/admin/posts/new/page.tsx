// src/app/admin/posts/new/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouterをインポート
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
  const router = useRouter(); // routerインスタンスを取得

  useEffect(() => setMounted(true), []);

  // --- ↓↓↓ フォーム送信処理を追加 ↓↓↓ ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

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

      // 成功したら、記事管理ページにリダイレクト
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
        {/* ... (ヘッダー部分は変更なし) ... */}
      </div>

      {/* ↓↓↓ formタグにonSubmitを追加 ↓↓↓ */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* ... (各入力欄は変更なし) ... */}

        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="...">下書き保存</button>
          <button type="submit" className="...">公開する</button>
        </div>
      </form>
    </div>
  );
}