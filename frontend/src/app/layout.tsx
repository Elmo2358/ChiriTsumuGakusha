// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { RouteChangeListener } from "@/components/RouteChangeListener";
import { AppWrapper } from "@/components/AppWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "塵積学舎",
  description: "日々の学習記録と発見",
};

// ローディング状態に応じてスピナーを表示するコンポーネント
function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();
  return (
    <>
      <RouteChangeListener />
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* LoadingProviderがAppContentを囲んでいることを確認 */}
          <LoadingProvider>
            <AppWrapper>{children}</AppWrapper>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}