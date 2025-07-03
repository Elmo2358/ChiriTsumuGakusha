// src/app/admin/posts/page.tsx

import { dummyArticles } from "@/data/article";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminPostsPage() {
  return (
    <div className="w-full max-w-6xl rounded-lg bg-light-bg p-6 shadow-xl dark:bg-dark-bg sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
            記事管理
          </h1>
          <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
            記事の編集・削除を行います。
          </p>
        </div>
        <Link
          href="/admin"
          className="flex items-center gap-2 rounded-md border bg-gray-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          ダッシュボードに戻る
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                タイトル
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                カテゴリー
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                公開日
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-light-bg dark:divide-gray-700 dark:bg-dark-bg">
            {dummyArticles.map((article) => (
              <tr key={article.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                  {article.title}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {article.category}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {new Date(article.date).toLocaleDateString('ja-JP')}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-4">
                    <Link href={`/admin/posts/edit/${article.id}`} className="text-blue-500 hover:text-blue-700">
                      <Edit className="h-5 w-5" />
                    </Link>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}