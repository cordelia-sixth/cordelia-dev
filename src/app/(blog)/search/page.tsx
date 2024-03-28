import { getArticleList } from "@/lib/microcms";
import { ArticleList } from "../blog/_components/article/ArticleList";
import { LIMIT } from "@/constants/microcms";

type Props = {
  searchParams: {
    q: string;
  };
};

export const revalidate = 60;

/**
 * 記事検索結果を表示するページ
 */
const Page = async ({ searchParams }: Props) => {
  const data = await getArticleList({
    limit: LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <ArticleList articleList={data.contents} />
      {/* TODO: ページネーション機能を付ける */}
      {/* <PageNation totalCount={data.contents.length} q={searchParams.q} /> */}
    </>
  );
};

export default Page;
