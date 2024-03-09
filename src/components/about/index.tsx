import Link from "next/link";
import { Avatar } from "../avatar";
import { HTag } from "../ui/HTag";

/**
 * トップページのAbout
 */
export const About = () => {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex flex-col gap-2 sm:mx-auto sm:w-[400px] sm:flex-row sm:items-center">
        <Avatar
          id="myicon"
          alt="サイト制作者のアイコン"
          width={140}
          height={140}
        />
        <div>
          <HTag level={2} className="text-center text-3xl sm:text-4xl">
            cordelia
          </HTag>

          <p className="text-center">is Front End Developer.</p>

          <div className="flex justify-center gap-2 pt-3">
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
      </div>

      <div>
        <div>
          <HTag level={3}>Skils</HTag>
          <p>JavaScript TypeScript React Next.js</p>
          <small className="block text-right">and more...</small>
        </div>

        <div className="pt-8">
          <HTag level={3}>Certifications</HTag>
          <p>基本情報技術者</p>
        </div>
      </div>
    </div>
  );
};
