import Link from "next/link";
import { Avatar } from "../avatar";
import { HTag } from "../ui/HTag";
import { Tag } from "../ui/Tag";

/**
 * トップページのAbout
 */
export const About = () => {
  return (
    // <div className="flex flex-col items-center justify-center gap-12">
    <div className="flex flex-col gap-12 pt-10">
      <div className="flex flex-col gap-6">
        <Avatar
          id="myicon"
          alt="サイト制作者のアイコン"
          width={140}
          height={140}
          className=""
        />
        <div>
          <HTag level={2} className="text-center text-3xl">
            cordelia
          </HTag>
          <p className="text-center">is Front End developer.</p>
        </div>

        <div className="flex justify-center gap-2">
          <Link
            href="https://github.com/cordelia-sixth"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </Link>
          <Link
            href="https://zenn.dev/cordelia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Zenn
          </Link>
          <Link
            href="https://twitter.com/cordelia_sixth"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            X
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <HTag level={2}>Skils</HTag>
          <div className="flex flex-col">
            <p className="sm:text-2xl">JavaScript TypeScript React Next.js</p>
            <small className="block self-end pr-8">and more...</small>
          </div>
        </div>

        <div>
          <HTag level={2}>Certifications</HTag>
          <p className="sm:text-xl">基本情報技術者</p>
        </div>
      </div>
    </div>
  );
};
