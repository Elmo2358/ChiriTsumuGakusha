// src/components/Sidebar.tsx

"use client";

import Link from "next/link";
import { X, Code, Mic, Rss, Github, Twitter } from 'lucide-react'; // アイコンをインポート

// サイドバーコンポーネントのProps（プロパティ）の型を定義
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* --- オーバーレイ --- */}
      {/* サイドバーが開いている時のみ表示され、クリックすると閉じる */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* --- サイドバー本体 --- */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out dark:bg-dark-bg
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* ヘッダー部分 */}
        <div className="flex items-center justify-between pb-4 border-b border-light-border dark:border-dark-border">
          <h2 className="text-lg font-semibold">メニュー</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* ナビゲーションリンク */}
        <nav className="mt-6">
          <ul className="space-y-2">
            <li><Link href="/about" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={onClose}><Rss className="h-5 w-5" /><span>サイトの理念</span></Link></li>
            <li><Link href="/categories/web-dev" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={onClose}><Code className="h-5 w-5" /><span>Web開発</span></Link></li>
            <li><Link href="/categories/atcoder" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={onClose}><Code className="h-5 w-5" /><span>AtCoder</span></Link></li>
            <li><Link href="/categories/toeic" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={onClose}><Mic className="h-5 w-5" /><span>TOEIC</span></Link></li>
          </ul>
        </nav>

        {/* フッターのSNSリンク */}
        <div className="absolute bottom-6 left-6 flex space-x-4">
            <a href="https://github.com/Elmo2358" target="_blank" rel="noopener noreferrer"><Github className="h-6 w-6 text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary" /></a>
            {/* <a href="https://twitter.com/your_account" target="_blank" rel="noopener noreferrer"><Twitter className="h-6 w-6 text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary" /></a> */}
        </div>
      </aside>
    </>
  );
}