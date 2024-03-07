import { getBlog, getDetail } from "@/lib/microcms";
import HTMLReactParser from "html-react-parser/lib/index";
import { notFound } from "next/navigation";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
  const { contents } = await getBlog();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

type Props = {
  params: {
    /** 記事ID */
    postId: string;
  };
};

/**
 * 記事の詳細ページ
 */
export default async function Page({ params }: Props) {
  const { postId } = params;
  const post = await getDetail(postId);
  if (!post) notFound();

  // TODO: もっとコード量を少なくできそう
  const postBody = load(post.contents, null, false);
  postBody("pre").each((_, elm) => {
    const parsed = hljs.highlightAuto(postBody(elm).text());
    postBody(elm).html(parsed.value);
    postBody(elm).addClass("rounded-lg bg-slate-800 overflow-x-auto p-4");
  });
  postBody("code").each((_, elm) => {
    postBody(elm).addClass("rounded-lg bg-slate-800 p-1");
  });
  postBody("h2").each((_, elm) => {
    postBody(elm).addClass("font-bold max-sm:text-lg sm:text-2xl");
  });

  post.contents = postBody.html();

  // TODO: 日時修正関数を作成
  const parseDate = (date: Date) => {
    const target = new Date(date);
  };

  // TODO: 諸々表示を加工する
  return (
    <>
      <h1 className="pb-6 font-bold max-sm:text-xl sm:text-3xl">
        {post.title}
      </h1>
      <p>Published{post.publishedAt}</p>
      <p>Written cordelia</p>
      {post.tags.map((tag) => {
        return <p key={tag.id}>{tag.name}</p>;
      })}
      <div className="grid grid-cols-1 gap-2 border-t border-slate-800 pt-8">
        {HTMLReactParser(post.contents)}
      </div>
    </>
  );
}
