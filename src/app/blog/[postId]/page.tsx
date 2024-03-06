/**
 * 記事の詳細ページ
 */

import { getBlog, getDetail } from "@/lib/microcms";
import HTMLReactParser from "html-react-parser/lib/index";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { contents } = await getBlog();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

type Props = {
  params: {
    postId: string;
  };
};

export default async function Page({ params }: Props) {
  const { postId } = params;
  const post = await getDetail(postId);
  const time = new Date().toLocaleString();

  console.log(post.contents);

  if (!post) notFound();

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{time}</h2>
      <div>{HTMLReactParser(post.contents)}</div>
    </>
  );
}
