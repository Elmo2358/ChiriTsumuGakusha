// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Geist と Geist_Mono を Inter に変更
import "./globals.css"; // globals.cssのインポートを確認

// Interフォントを初期化
const inter = Inter({ // Geist を Inter に変更
  subsets: ["latin"],
  variable: "--font-inter", // 変数名を --font-inter に変更
});

// Geist_Mono は使用しないので削除

export const metadata: Metadata = {
  title: "塵積学舎", // サイト名
  description: "日々の学習記録と発見", // サイトの副題
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // htmlタグに"light"クラスをデフォルトで適用し、JSで"dark"クラスをトグルする
    <html lang="ja" className="light">
      {/* bodyタグにパレットの色を適用し、トランジションを設定 */}
      <body
        // geistSans.variable と geistMono.variable を inter.variable に変更
        className={`${inter.variable} antialiased
                   bg-light-bg text-light-text-primary dark:bg-dark-bg dark:text-dark-text-primary
                   transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}