// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

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
    <html lang="ja" suppressHydrationWarning>
      <body
        // ここのクラス指定は変更不要です
        className={`${inter.variable} antialiased
                   bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100
                   transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>{/* childrenをmainタグで囲むと、より構造的になります */}
        </ThemeProvider>
      </body>
    </html>
  );
}