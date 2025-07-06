// src/components/ThemeToggleButton.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-md bg-gray-200 p-2 dark:bg-gray-700" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="テーマを切り替える"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
      ) : (
        <Moon className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
      )}
    </button>
  );
}