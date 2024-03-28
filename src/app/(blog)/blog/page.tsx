import { PageNation } from "@/components/Pagination";
import { ArticleList } from "./_components/article/ArticleList";
import { getArticleList } from "@/lib/microcms";
import { LIMIT } from "@/constants/microcms";

/**
 * ブログトップページ
 */
const Page = async () => {
  // 1ページに表示する記事数だけ取得する
  // コンテンツ取得数をlimitで制限してもtotalCountは全てのコンテンツ数を保持している
  const data = await getArticleList({
    limit: LIMIT,
  });
  return (
    <>
      <ArticleList articleList={data.contents} />
      <PageNation totalCount={data.totalCount} />
    </>
  );
};

export default Page;
