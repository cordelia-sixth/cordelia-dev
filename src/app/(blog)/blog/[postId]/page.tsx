import { getArticleList, getDetail } from "@/lib/microcms";
import { ArticleBody } from "./_components/ArticleBody";
import { parseHtml } from "../utils/parseHtml";
import "highlight.js/styles/github-dark.css";

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents: articleList } = await getArticleList();
  const paths = articleList.map((article) => {
    return {
      postId: article.id,
    };
  });

  return paths;
}

type Props = {
  params: {
    /** 記事ID */
    postId: string;
  };
};

/**
 * 記事ページ
 */
export default async function Page({ params }: Props) {
  const post = await getDetail(params.postId);
  const body = parseHtml(post);

  return <ArticleBody post={post} body={body}></ArticleBody>;
}
