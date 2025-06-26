// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      
      {/* ブログタイトル */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-light-accent dark:text-dark-accent">
        塵積学舎
      </h1>
      
      {/* 副題 */}
      <p className="text-lg md:text-xl mb-8 text-light-text-secondary dark:text-dark-text-secondary">
        日々の学習記録と発見
      </p>

      {/* アクセントカラーのボタンの例 */}
      <button className="bg-light-accent text-white py-3 px-6 rounded-full shadow-lg
                         hover:bg-light-accent/[0.9] dark:bg-dark-accent dark:hover:bg-dark-accent/[0.9]
                         transition-colors duration-200">
        記事一覧を見る
      </button>

      {/* 白い背景のカードの例（ライトモードで白、ダークモードでダーク背景） */}
      <div className="mt-12 p-8 rounded-xl shadow-xl max-w-md w-full text-center
                      bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border">
        <h2 className="text-2xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
          はじめに
        </h2>
        <p className="text-light-text-primary dark:text-dark-text-primary">
          このサイトは、私の学習の足跡を記録し、その知見を共有するための場所です。
          共に学びを深めていきましょう。
        </p>
      </div>

    </main>
  );
}