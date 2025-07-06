// src/components/LoadingSpinner.tsx
import Image from "next/image";

export function LoadingSpinner() {
  const text = "Loading...";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* カエルの画像 */}
      <Image
        src="/images/tsumoru.png"
        alt="Loading Frog"
        width={150}
        height={150}
        className="rounded-full"
      />
      {/* ウェーブするテキスト */}
      <div className="mt-4 flex justify-center">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="animate-wave text-2xl font-bold text-white"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}