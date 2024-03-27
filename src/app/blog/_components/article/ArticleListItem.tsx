import { HTag } from "@/components/ui/HTag";
import { Article } from "@/lib/microcms";
import { parseFixedDate } from "@/utils/timeParser";
import Link from "next/link";

type Props = {
  article: Article;
};

/**
 * 記事一覧ページに記事アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  return (
    <Link
      className="flex min-h-60 w-full flex-col justify-between gap-8 rounded-lg bg-slate-800 p-3"
      href={`/blog/${article.id}`}
    >
      <div className="flex flex-col gap-2">
        <HTag level={2}>{article.title}</HTag>
        <p className="">
          <time>{parseFixedDate(article.publishDate)}</time>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => {
          return (
            <small
              className="rounded-3xl border border-white px-2"
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
