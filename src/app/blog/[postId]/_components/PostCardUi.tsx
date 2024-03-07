import { Blog } from "@/lib/microcms";
import Link from "next/link";

/**
 * 記事一覧ページに表示するコンポーネント
 * @param id 記事ID
 * @param title 記事タイトル
 * @param publishedAt 投稿日時
 * @param tags タグ
 * @returns article
 */
export const PostCardUi = ({ id, title, publishedAt, tags }: Blog) => {
  return (
    <Link
      className="grid h-48 grid-cols-1 gap-2 rounded-lg bg-slate-800 p-3"
      href={`/blog/${id}`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-bold max-sm:text-lg sm:text-2xl">{title}</h2>
        <p className="">
          <time>{publishedAt}</time>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          return (
            <small
              className="self-end rounded-3xl border border-white px-2"
              key={tag.id}
            >
              {tag.name}
            </small>
          );
        })}
      </div>
    </Link>
  );
};
