// src/components/Footer.tsx

import { LoadingLink } from "@/components/LoadingLink";

export function Footer() {
    const currentYear = new Date().getFullYear();

   return (
    <footer className="w-full border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        {/* 左側のナビゲーションリンク */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          <LoadingLink href="/contact" className="hover:text-light-text-primary dark:hover:text-dark-text-primary">
            お問い合わせ
          </LoadingLink>
          <LoadingLink href="/privacy" className="hover:text-light-text-primary dark:hover:text-dark-text-primary">
            プライバシーポリシー
          </LoadingLink>
          <LoadingLink href="/admin/login" className="hover:text-light-text-primary dark:hover:text-dark-text-primary">
            管理者用
          </LoadingLink>
        </div>

        {/* 右側のコピーライト */}
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
          © {currentYear} 塵積学舎 All rights reserved.
        </p>
      </div>
    </footer>
  );
}