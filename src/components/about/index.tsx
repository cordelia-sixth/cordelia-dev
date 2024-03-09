import Link from "next/link";
import { Avatar } from "../avatar";
import { Code } from "../ui/Code";

/**
 * トップページのAbout
 */
export const About = () => {
  return (
    <div className="grid gap-4">
      <Avatar id="myicon" alt="サイト制作者のアイコン" />
      <div>
        <h2 className="text-center text-3xl sm:text-4xl">cordelia</h2>
        <p className="text-center">is Front End Developer.</p>
      </div>

      <div>
        <h3 className="">Skills</h3>
        <p>
          Next.js TypeScript <small>and more...</small>
        </p>
      </div>

      <h3 className="">Certifications</h3>
      <ul>
        <li>基本情報技術者</li>
      </ul>

      <h3 className="">Links</h3>
      <ul className="">
        <li>
          <Link
            href={"https://github.com/cordelia-sixth"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href={"https://twitter.com/cordelia_sixth"}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </Link>
        </li>
      </ul>
      <div className=""></div>
    </div>
  );
};
