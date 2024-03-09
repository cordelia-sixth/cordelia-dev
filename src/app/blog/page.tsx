import { Blog, client, getBlog } from "@/lib/microcms";
import { PostCardUi } from "./[postId]/_components/PostCardUi";
import { HTag } from "@/components/ui/HTag";

export default async function Page() {
  const { contents } = await getBlog();

  if (!contents || contents.length === 0)
    return <HTag level={1}>No contents.</HTag>;

  return (
    <>
      {contents.map((item) => {
        return <PostCardUi key={item.id} {...item} />;
      })}
    </>
  );
}
