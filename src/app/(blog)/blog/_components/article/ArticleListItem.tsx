import { HTag } from "@/components/ui/HTag";
import { Tag } from "@/components/ui/Tag";
import { Article } from "@/lib/microcms";
import { parseFixedDate } from "@/utils/timeParser";
import Link from "next/link";

type Props = {
  /** 記事データ */
  article: Article;
};

/**
 * 記事一覧ページに記事アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  return (
    <Link
      href={`/blog/${article.id}`}
      className="flex h-64 w-full flex-col justify-between rounded-lg bg-slate-800 p-3"
    >
      <div className="flex flex-col gap-2">
        <HTag level={2}>{article.title}</HTag>
        <time>{parseFixedDate(article.publishDate)}</time>
      </div>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => {
          return <Tag key={tag.id} name={tag.name} />;
        })}
      </div>
    </Link>
  );
};
