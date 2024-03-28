import { getArticleList } from "@/lib/microcms";
import { ArticleList } from "../../_components/article/ArticleList";
import { PageNation } from "@/components/Pagination";
import { LIMIT } from "@/constants/microcms";

export async function generateStaticParams() {
  // 全ての記事を取得
  const contents = await getArticleList();

  // ページネーション数を算出
  const pages = Array.from({
    length: Math.ceil(contents.totalCount / LIMIT),
  }).map((_, i) => i + 1);

  // [current]部分を作成
  const paths = pages.map((page) => {
    return {
      current: String(page),
    };
  });

  return paths;
}

type Props = {
  params: {
    /** 現在のページ */
    current: string;
  };
};

/**
 *
 */
export default async function Page({ params }: Props) {
  // 現在のページを取得
  const current = Number(params.current);

  // 記事を取得
  const data = await getArticleList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });

  return (
    <>
      <ArticleList articleList={data.contents} />
      <PageNation totalCount={data.totalCount} current={current} />
    </>
  );
}
