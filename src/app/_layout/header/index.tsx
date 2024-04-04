import Link from "next/link";

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="flex items-end justify-between">
      <Link href="/" className="text-2xl sm:text-3xl">
        cordelia.dev
      </Link>
      <div className="flex gap-2">
        <Link href="/blog">Blog</Link>
        <Link href="/works">Works</Link>
      </div>
    </header>
  );
};
