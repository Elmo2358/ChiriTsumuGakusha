import type { Article } from '@/types/article';

export const dummyArticles: Article[] = [
  {
    id: 'how-to-build-blog-with-nextjs',
    title: 'Next.js と Tailwind CSS でブログを構築する',
    date: '2025-06-30',
    category: 'Web開発',
    imageUrl: '/images/nextjs-card.png',
    description: '最新の技術スタックを使って、モダンで高速なブログサイトをゼロから作成する方法を解説します。',
    content: `
## はじめに
こんにちは！この記事では、Next.jsとTailwind CSSを使って、モダンなブログサイトを構築する手順を解説します。

### 使用する技術
- Next.js (App Router)
- TypeScript
- Tailwind CSS

\`\`\`javascript
// サンプルコード
console.log("Hello, World!");
\`\`\`

テーブルも使えます。

| ヘッダー1 | ヘッダー2 |
|---|---|
| セル1 | セル2 |
| セル3 | セル4 |

さあ、始めましょう！
    `,
  },
  {
    id: 'atcoder-beginner-guide',
    title: 'AtCoder初心者が緑になるまでにやったこと',
    date: '2025-06-28',
    category: 'AtCoder',
    imageUrl: '/images/atcoder-card.png',
    description: '競プロ初心者が効率的に学習を進めるためのロードマップと、コンテストで結果を出すためのコツを紹介。',
    content: `
## AtCoderとは
AtCoderは、競技プログラミングのコンテストサイトです。

- **ABC (AtCoder Beginner Contest):** 初心者向け
- **ARC (AtCoder Regular Contest):** 中級者向け
- **AGC (AtCoder Grand Contest):** 上級者向け

まずはABCから参加してみましょう。
    `,
  },
  {
    id: 'toeic-score-up-strategy',
    title: 'TOEIC L&R Test 900点を超えるための学習戦略',
    date: '2025-06-25',
    category: 'TOEIC',
    imageUrl: '/images/toeic-card.png',
    description: '単語学習から模試の活用法まで、スコアを最大化するための具体的な勉強法と時間管理術を公開します。',
    content: `
## TOEIC L&R Testとは
TOEIC L&R Testは、英語のリスニングとリーディング能力を測定する試験です。
- **リスニング:** 100問 \n- **リーディング:** 100問 
### 学習戦略
1. **単語学習:** 毎日30分、TOEIC頻出単語を覚える。
2. **模試の活用:** 週に1回、実際の試験形式の模試を受ける。
3. **時間管理:** リスニングは1問あたり約30秒、リーディングは1問あたり約75秒を目安に解く。
4. **復習:** 間違えた問題は必ず復習し、解説を読み込む。 
5. **スピーキングとライティング:** TOEIC Speaking & Writing Testも併せて受験し、総合的な英語力を向上させる。
### 参考書籍
- **TOEIC公式問題集:** 実際の試験形式に慣れるために必須。
- **TOEIC頻出単語集:** 単語力を強化するための参考書。
- **TOEIC Listening & Reading Test 900点攻略:** 高得点を目指するための戦略本。
### まとめ  
TOEIC L&R Testで900点を超えるためには、計画的な学習と定期的な模試の活用が鍵です。毎日の学習を習慣化し、試験当日に最高のパフォーマンスを発揮できるようにしましょう。
    `,
    
  },
];

// 人気記事用の仮データ（後で使います）
export const dummyPopularArticles: Article[] = [
  {
    id: 'atcoder-beginner-guide',
    title: 'AtCoder初心者が緑になるまでにやったこと',
    date: '2025-06-28',
    category: 'AtCoder',
    imageUrl: '/images/atcoder-card.png',
    description: '競プロ初心者が効率的に学習を進めるためのロードマップと、コンテストで結果を出すためのコツを紹介。',
    content: `
## はじめに
こんにちは！この記事では、Next.jsとTailwind CSSを使って、モダンなブログサイトを構築する手順を解説します。

### 使用する技術
- Next.js (App Router)
- TypeScript
- Tailwind CSS

\`\`\`javascript
// サンプルコード
console.log("Hello, World!");
\`\`\`

テーブルも使えます。

| ヘッダー1 | ヘッダー2 |
|---|---|
| セル1 | セル2 |
| セル3 | セル4 |

さあ、始めましょう！
    `,
  },
  {
    id: 'how-to-build-blog-with-nextjs',
    title: 'Next.js と Tailwind CSS でブログを構築する',
    date: '2025-06-30',
    category: 'Web開発',
    imageUrl: '/images/nextjs-card.png',
    description: '最新の技術スタックを使って、モダンで高速なブログサイトをゼロから作成する方法を解説します。',
    content: `
## AtCoderとは
AtCoderは、競技プログラミングのコンテストサイトです。

- **ABC (AtCoder Beginner Contest):** 初心者向け
- **ARC (AtCoder Regular Contest):** 中級者向け
- **AGC (AtCoder Grand Contest):** 上級者向け

まずはABCから参加してみましょう。
    `,
  },
  {
    id: 'toeic-score-up-strategy',
    title: 'TOEIC L&R Test 900点を超えるための学習戦略',
    date: '2025-06-25',
    category: 'TOEIC',
    imageUrl: '/images/toeic-card.png',
    description: '単語学習から模試の活用法まで、スコアを最大化するための具体的な勉強法と時間管理術を公開します。',
    content: `
## TOEIC L&R Testとは
TOEIC L&R Testは、英語のリスニングとリーディング能力を測定する試験です。
- **リスニング:** 100問 \n- **リーディング:** 100問 
### 学習戦略
1. **単語学習:** 毎日30分、TOEIC頻出単語を覚える。
2. **模試の活用:** 週に1回、実際の試験形式の模試を受ける。
3. **時間管理:** リスニングは1問あたり約30秒、リーディングは1問あたり約75秒を目安に解く。
4. **復習:** 間違えた問題は必ず復習し、解説を読み込む。 
5. **スピーキングとライティング:** TOEIC Speaking & Writing Testも併せて受験し、総合的な英語力を向上させる。
### 参考書籍
- **TOEIC公式問題集:** 実際の試験形式に慣れるために必須。
- **TOEIC頻出単語集:** 単語力を強化するための参考書。
- **TOEIC Listening & Reading Test 900点攻略:** 高得点を目指するための戦略本。
### まとめ  
TOEIC L&R Testで900点を超えるためには、計画的な学習と定期的な模試の活用が鍵です。毎日の学習を習慣化し、試験当日に最高のパフォーマンスを発揮できるようにしましょう。
    `,
  },
]