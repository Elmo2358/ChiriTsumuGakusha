// src/app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'; // App Router用
import { LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //ページリロードを防止

    // 仮のパスワードを"password"とする
    if (password == 'password') {
      //成功した場合、ダッシュボードにリダイレクト
      router.push('/admin');
    } else {
      //失敗した場合、エラーメッセージを表示
      setError('パスワードが正しくありません。')
      setPassword('');//　入力欄をクリア
    }
  };

  return (
   <div className="w-full max-w-sm rounded-lg bg-light-bg p-8 shadow-xl dark:bg-dark-bg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
          管理者ログイン
        </h1>
        <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          パスワードを入力してください
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="sr-only">
            パスワード
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="relative block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-400 dark:focus:ring-green-400"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* エラーメッセージ表示エリア */}
        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-light-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-dark-accent dark:hover:bg-green-500"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-green-300 group-hover:text-green-200" aria-hidden="true" />
            </span>
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
}