import { getBlog, getDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { PostBody } from "./_components/PostBody";
import { parseHtml } from "../utils/parseHtml";

export const revalidate = 600;

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
    /** 記事ID */
    postId: string;
  };
};

/**
 * 個別記事ページ
 */
export default async function Page({ params }: Props) {
  const { postId } = params;
  const post = await getDetail(postId);
  if (!post) notFound();

  const body = parseHtml(post);

  return (
    <>
      <PostBody post={post} body={body}></PostBody>
    </>
  );
}
