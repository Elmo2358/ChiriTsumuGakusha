// src/components/Header.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search} from "lucide-react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Sidebar } from "./Sidebar";

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

return (
    // <></> (Fragment)で囲む
    <> 
      <header className="sticky top-0 z-50 w-full border-b border-light-border bg-light-background/95 backdrop-blur dark:border-dark-border dark:bg-dark-background/75">
        {/* ... (中身は変更なし) ... */}
        <div className="container mx-auto flex h-16 max-w-screen-lg items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
              塵積学舎
            </span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Search className="h-5 w-5 text-light-text-secondary dark:text-dark-text-secondary" />
            </button>
            <ThemeToggleButton />
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebarコンポーネントを呼び出し、状態と関数を渡す */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
}