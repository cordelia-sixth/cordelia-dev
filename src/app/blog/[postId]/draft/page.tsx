import { getBlogDraft } from "@/lib/microcms";
import { notFound, redirect } from "next/navigation";
import { PostBody } from "../_components/ArticleBody";
import Link from "next/link";

type Props = {
  params: { postId: string };
  searchParams: { draftKey: string | string[] };
};

/**
 * プレビューページ
 */
const Page = async ({
  params: { postId },
  searchParams: { draftKey },
}: Props) => {
  if (typeof draftKey !== "string" || draftKey === "") {
    redirect(`/blogs/${postId}`);
  }

  const post = await getBlogDraft(postId, { draftKey });
  if (!post) {
    notFound();
  }

  return (
    <main>
      <PostBody post={post} body />
      {draftKey && (
        <Link href={`/blog`} className="border border-white p-2">
          プレビュー終了
        </Link>
      )}
    </main>
  );
};

export default Page;