import Link from "next/link";

/**
 * トップページのAbout
 */
export const About = () => {
  return (
    <div className="grid text-center">
      <div className="grid gap-10 text-center">
        <div>
          <h2 className="text-4xl">cordelia</h2>
          <p>is Front End Developer.</p>
        </div>
        <div>
          <h3 className="text-2xl">Skills</h3>
          <ul className="flex gap-2">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>prisma</li>
            <li>MongoDB</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl">Certifications</h3>
          <ul>
            <li>基本情報技術者</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl">Links</h3>
          <ul className="flex justify-center gap-2">
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
        </div>
      </div>
    </div>
  );
};
