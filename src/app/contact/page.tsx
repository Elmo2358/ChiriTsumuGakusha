// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      <div className="prose max-w-none dark:prose-invert">
        <h2>お問い合わせ</h2>
        <p>
          ご意見、ご感想、ご質問、ご指摘、またはお仕事のご依頼など、お気軽にご連絡ください。
          <br />
          以下のフォームにご記入の上、送信ボタンを押してください。
        </p>
      </div>

      <form className="mt-8 max-w-xl mx-auto">
        <div className="space-y-6">
          {/* お名前 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
              お名前 (必須)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-400 dark:focus:ring-green-400"
                placeholder="塵積 太郎"
              />
            </div>
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
              メールアドレス (必須)
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-400 dark:focus:ring-green-400"                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
              お問い合わせ内容 (必須)
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-green-400 dark:focus:ring-green-400"                defaultValue={""}
              />
            </div>
          </div>
        </div>

        {/* 送信ボタン */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            // 現在はまだ送信機能がないため、ボタンは見た目だけです
            className="inline-flex justify-center rounded-md border border-transparent bg-light-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-dark-accent dark:hover:bg-green-500"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}