// tailwind.config.ts
// (create-next-app@14.x で生成されたデフォルトのtailwind.config.tsに追記・修正)

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // srcフォルダ内のファイルを対象
    './app/**/*.{js,ts,jsx,tsx,mdx}', // appディレクトリも対象にする場合は含める
  ],
  theme: {
    extend: {
      colors: {
        // パレット2: 落ち着いたモダン
        // ライトモード
        'light-bg': '#FFFFFF',
        'light-text-primary': '#4A5568',
        'light-text-secondary': '#A0AEC0',
        'light-border': '#EDF2F7',
        'light-accent': '#059669',

        // ダークモード
        'dark-bg': '#2D3748',
        'dark-text-primary': '#EDF2F7',
        'dark-text-secondary': '#718096',
        'dark-border': '#4A5568',
        'dark-accent': '#10B981',
      },
    },
  },
  plugins: [],
}
export default config