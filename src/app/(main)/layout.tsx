// src/app/layout.tsx

// src/app/(main)/layout.tsx

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ThemeProviderを削除し、divから記述を始める
    <div className="flex min-h-screen flex-col bg-light-bg text-light-text-primary dark:bg-dark-bg dark:text-dark-text-primary">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}