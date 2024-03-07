import Link from "next/link";

export const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link href="/" className="text-2xl">
          cordelia.dev
        </Link>
        <Link href="/blog">Blog</Link>
      </div>
    </header>
  );
};
