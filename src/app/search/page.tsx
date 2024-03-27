import { ArticleList } from "../(blog)/blog/_components/article/ArticleList";

type Props = {
  searchParams: {
    q: string;
  };
};

// export const revalidate = 60;

/**
 * 記事検索結果を表示するページ
 */
const Page = ({ searchParams }: Props) => {
  return <ArticleList query={searchParams.q} />;
};

export default Page;
