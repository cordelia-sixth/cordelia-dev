import { Blog, client, getBlog } from "@/lib/microcms";
import Link from "next/link";

export default async function Page() {
  const { contents } = await getBlog();

  // ページ生成にかかった時間
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) return <h1>No contents.</h1>;

  return (
    <>
      <h1>{time}</h1>
      <ul>
        {contents.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
