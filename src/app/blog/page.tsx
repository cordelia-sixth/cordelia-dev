import { Blog, client, getBlog } from "@/lib/microcms";
import Link from "next/link";
import { PostCardUi } from "./[postId]/_components/PostCardUi";

export default async function Page() {
  const { contents } = await getBlog();

  if (!contents || contents.length === 0) return <h1>No contents.</h1>;

  return (
    <>
      {contents.map((item) => {
        return <PostCardUi key={item.id} {...item} />;
      })}
    </>
  );
}
