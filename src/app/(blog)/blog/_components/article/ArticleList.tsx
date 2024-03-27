import { getArticleList } from "@/lib/microcms";
import { HTag } from "@/components/ui/HTag";
import { ArticleListItem } from "./ArticleListItem";

type Props = {
  query?: string;
};

/**
 * 記事一覧を表示するコンポーネント
 */
export const ArticleList = async ({ query = "" }: Props) => {
  const { contents: articleList } = await getArticleList({
    q: query,
  });

  if (!articleList) return null;
  if (articleList.length === 0)
    return <HTag level={1}>記事がありません。</HTag>;

  return (
    <div className="flex flex-col gap-6 min-[426px]:grid min-[426px]:grid-cols-2">
      {articleList.map((article) => {
        return <ArticleListItem key={article.id} article={article} />;
      })}
    </div>
  );
};
