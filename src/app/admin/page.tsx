import { PlusCircle, BarChart2, BookOpen, Home } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
    return (
        <div className="w-full max-w-4xl rounded-lg bg-light-bg p-6 shadow-xl dark:bg-dark-bg sm:p-8">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                管理者ダッシュボード
              </h1>
              <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
                ようこそ、サイト管理者様。
              </p>
            </div>
            <Link
            href="/"
            className="flex items-center gap-2 rounded-md border bg-gray-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Home className="h-4 w-4" />
              メインサイトへ
            </Link>
          </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* 新規記事作成カード */}
        <Link
          href="/admin/posts/new"
          className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:bg-gray-800 border-light-border border-4"
        >
          <PlusCircle className="h-12 w-12 text-light-accent dark:text-dark-accent" />
          <p className="mt-4 font-semibold text-light-text-primary dark:text-dark-text-primary">
            新しい記事を作成
          </p>
        </Link>

        {/* 記事管理カード */}
        <Link
          href="/admin/posts"
          className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:bg-gray-800 border-light-border border-4"
        >
          <BookOpen className="h-12 w-12 text-light-accent dark:text-dark-accent" />
          <p className="mt-4 font-semibold text-light-text-primary dark:text-dark-text-primary">
            記事を管理
          </p>
        </Link>

        {/* データ分析カード */}
        <Link
          href="/admin/analytics"
          className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 text-center transition-all hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:bg-gray-800 border-light-border border-4"
        >
          <BarChart2 className="h-12 w-12 text-light-accent dark:text-dark-accent" />
          <p className="mt-4 font-semibold text-light-text-primary dark:text-dark-text-primary">
            データ分析
          </p>
        </Link>
      </div>
    </div>
    );
}