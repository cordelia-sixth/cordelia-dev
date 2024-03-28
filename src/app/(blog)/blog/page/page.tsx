import { notFound } from "next/navigation";

/**
 * このページにアクセスされたらnot-foundを表示する
 */
const Page = () => {
  return notFound();
};

export default Page;
