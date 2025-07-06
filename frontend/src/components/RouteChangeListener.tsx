// src/components/RouteChangeListener.tsx
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export function RouteChangeListener() {
  const pathname = usePathname();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // ここでは単純化のため、遷移が始まったらすぐにローディングを終了させています。
    // 本来は、データの取得完了などを待って終了させます。
    // まずは動くことを確認するため、すぐにfalseにしています。
    setIsLoading(false);
  }, [pathname, setIsLoading]);

  // このコンポーネントはUIを持たないため、nullを返します。
  return null;
}