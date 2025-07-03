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
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            // h2要素のスタイルをカスタマイズ
            h2: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              borderBottom: '3px solid',
              borderColor: theme('colors.light-accent'), // ライトモードの差し色
            },
           h3: {
              // h2より少し控えめなスタイル
              padding: '0.25rem 1rem', // 上下の余白を小さく
              borderLeft: '4px solid', // 左線に変更
              borderColor: theme('colors.light-accent'),
              backgroundColor: theme('colors.gray.50'),
              borderRadius: '0.25rem',
            },
            h4: {
              // さらにシンプルなスタイル
              fontWeight: 'bold', // 太字を維持
              borderBottom: '2px solid',
              borderColor: theme('colors.gray.300'),
              paddingBottom: '0.25rem', // 下線との間に少し余白
            },
          },
        },
        // ダークモード時のスタイル
        invert: {
          css: {
            h2: {
              backgroundColor: theme('colors.gray.800'),
              borderColor: theme('colors.dark-accent'), // ダークモードの差し色
            },
            h3: {
              borderColor: theme('colors.dark-accent'),
              backgroundColor: theme('colors.gray.800'),
            },
            h4: {
              borderColor: theme('colors.gray.600'),
          },
        },
      },
    }),
    // ここでextendの閉じカッコ
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;