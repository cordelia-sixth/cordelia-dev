import Link from "next/link";

export const Header = () => {
  return (
    <header className="sm: flex items-end gap-3">
      <Link href="/" className="text-2xl sm:text-3xl">
        cordelia.dev
      </Link>
      <Link href="/blog">Blog</Link>
    </header>
  );
};
