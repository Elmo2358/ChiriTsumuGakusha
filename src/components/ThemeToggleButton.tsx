// src/components/ThemeToggleButton.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  // サーバーサイドでレンダリングされたUIがクライアントと一致するまで何何も表示しない
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}