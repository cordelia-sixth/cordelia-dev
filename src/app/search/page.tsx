import { getAtricleList } from "@/lib/microcms";

type Props = {
  searchParams: {
    q?: string;
  };
};

/**
 * 記事タイトル検索コンポーネント
 */
const Page = async ({ searchParams }: Props) => {
  const data = await getAtricleList({
    q: searchParams.q,
  });

  return (
    <>
      <h1>Search</h1>
    </>
  );
};

export default Page;
