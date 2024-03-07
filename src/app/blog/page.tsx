import { Blog, client, getBlog } from "@/lib/microcms";
import Link from "next/link";

export default async function Page() {
  const { contents } = await getBlog();

  if (!contents || contents.length === 0) return <h1>No contents.</h1>;

  return (
    <>
      <ul>
        {contents.map((item) => {
          return (
            <article key={item.id}>
              <h2 className="text-xl">
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </h2>
            </article>
          );
        })}
      </ul>
    </>
  );
}
