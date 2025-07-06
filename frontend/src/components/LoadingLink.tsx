// src/components/LoadingLink.tsx
"use client";

import Link, { LinkProps } from "next/link";
import { useLoading } from "@/context/LoadingContext";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

// next/linkのプロパティをすべて受け取れるようにする
type LoadingLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (props.href === pathname) {
      return;
    }
    setIsLoading(true);
  
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}