// src/app/admin/layout.tsx

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 管理者画面には、公開サイトのヘッダーやフッターは不要なため、
  // childrenをそのまま表示するだけのシンプルなレイアウトにします。
  // 背景色を少し変え、コンテンツを中央に配置しています。
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}