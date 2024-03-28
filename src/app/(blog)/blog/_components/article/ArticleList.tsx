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
    <>
      {articleList.map((article) => {
        return <ArticleListItem key={article.id} article={article} />;
      })}
    </>
  );
};
