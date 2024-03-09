import { HTag } from "@/components/ui/HTag";
import { Blog } from "@/lib/microcms";
import { parseFixedDate } from "@/utils/timeParser";
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
      className="grid h-48 w-full grid-cols-1 gap-2 rounded-lg bg-slate-800 p-3"
      href={`/blog/${id}`}
    >
      <div className="flex flex-col gap-2">
        <HTag level={2}>{title}</HTag>
        <p className="">
          <time>{parseFixedDate(publishedAt)}</time>
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