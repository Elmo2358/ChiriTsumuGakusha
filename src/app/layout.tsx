// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 【変更点 1】作成したThemeProviderをインポートします
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "塵積学舎",
  description: "日々の学習記録と発見",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 【変更点 2】手動で設定していた className="light" を削除し、
    // next-themesが必要とする `suppressHydrationWarning` を追加します
    <html lang="ja" suppressHydrationWarning>
      <body
        // ここのクラス指定は変更不要です
        className={`${inter.variable} antialiased
                   bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100
                   transition-colors duration-300`}
      >
        {/*
          【変更点 3】bodyタグ直下で、childrenをThemeProviderで囲みます。
          これにより、サイト全体でテーマ機能が有効になります。
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}