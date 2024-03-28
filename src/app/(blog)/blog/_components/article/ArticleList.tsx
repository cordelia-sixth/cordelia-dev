import { Article, getArticleList } from "@/lib/microcms";
import { HTag } from "@/components/ui/HTag";
import { ArticleListItem } from "./ArticleListItem";

type Props = {
  query?: string;
  // limit?: number;
  // offset?: number;
  articleList?: Article[];
};

/**
 * 記事一覧を表示するコンポーネント
 */
export const ArticleList = async ({ query = "", articleList }: Props) => {
  // const { contents: articleList } = await getArticleList({
  //   q: query,
  // });

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
