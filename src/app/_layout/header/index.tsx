import { SearchField } from "@/components/SearchField";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-col justify-between gap-5">
      <div className="flex items-end justify-between">
        <Link href="/" className="text-2xl sm:text-3xl">
          cordelia.dev
        </Link>
        <Link href="/blog">Blog</Link>
      </div>
    </header>
  );
};
