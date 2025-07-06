// src/components/Header.tsx
"use client";

import { LoadingLink } from "@/components/LoadingLink"; 
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Sidebar } from "@/components/Sidebar"; // Sidebarコンポーネントを再度インポート
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Menu } from "lucide-react"; // Menuアイコンを再度インポート

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  // ↓↓↓ サイドバー用の状態管理を再度追加 ↓↓↓
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${searchTerm}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    // ↓↓↓ サイドバーと連携するため、Fragment(<></>)で囲む ↓↓↓
    <>
      <header className="bg-light-bg py-4 dark:bg-dark-bg">
        <div className="container mx-auto flex items-center justify-between px-4">
          <LoadingLink href="/" className="font-bold text-xl text-light-text-primary dark:text-dark-text-primary">
            塵積学舎
          </LoadingLink>
          <nav className="flex items-center space-x-2 md:space-x-4">
            {/* 検索バー (スマホでは非表示) */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="キーワード検索"
                className="w-40 rounded-md border-gray-300 bg-gray-100 py-2 pl-3 pr-10 shadow-sm focus:w-56 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* テーマ切り替えボタン */}
            <ThemeToggleButton />

            {/* ハンバーガーメニューボタン */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>
      
      {/* ↓↓↓ サイドバーコンポーネントを再度呼び出し ↓↓↓ */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}