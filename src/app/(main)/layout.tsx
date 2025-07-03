// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        className={`${inter.variable} antialiased`}
      >
       <div className="flex flex-col min-h-screen bg-light-bg text-light-text-primary dark:bg-dark-bg dark:text-dark-text-primary">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {/* 【変更点 3】mainタグが残りの高さをすべて埋めるようにする */}
            <main className="flex-grow">{children}</main>
            
            {/* 【変更点 4】mainタグの後にFooterを配置 */}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}