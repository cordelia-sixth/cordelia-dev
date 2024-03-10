import Link from "next/link";
import { Avatar } from "../avatar";
import { HTag } from "../ui/HTag";

/**
 * トップページのAbout
 */
export const About = () => {
  return (
    <div className="flex flex-col items-center gap-16 sm:items-start">
      <div className="flex flex-col sm:mx-auto sm:w-[100%] sm:flex-row sm:items-center">
        <Avatar
          id="myicon"
          alt="サイト制作者のアイコン"
          width={140}
          height={140}
          className="sm:w-full sm:pr-12"
        />
        <div>
          <HTag level={2} className="text-center text-3xl sm:text-5xl">
            cordelia
          </HTag>

          <p className="text-center">is Front End developer.</p>

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
        <div className="flex flex-col">
          <HTag level={3} className="sm:text-3xl">
            Skils
          </HTag>
          <div className="sm:flex sm:flex-row sm:gap-4">
            <p className="sm:text-2xl">JavaScript TypeScript React Next.js</p>
            <small className="block text-right sm:self-end sm:text-xl">
              and more...
            </small>
          </div>
        </div>

        <div className="pt-14">
          <HTag level={3} className="sm:text-3xl">
            Certifications
          </HTag>
          <p className="sm:text-xl">基本情報技術者</p>
        </div>
      </div>
    </div>
  );
};
