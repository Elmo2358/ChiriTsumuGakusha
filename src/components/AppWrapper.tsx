// src/components/AppWrapper.tsx
"use client"; // このコンポーネントはクライアント側で動作することを明記

import { useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { RouteChangeListener } from "@/components/RouteChangeListener";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <RouteChangeListener />
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}