import { getBlog, getDetail } from "@/lib/microcms";
import HTMLReactParser from "html-react-parser/lib/index";
import { notFound } from "next/navigation";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { HTag } from "@/components/ui/HTag";
import { parseFixedDate } from "@/utils/timeParser";

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
    postBody(elm).addClass("text-xl font-bold sm:text-2xl");
  });

  post.contents = postBody.html();

  // TODO: 諸々表示を加工する
  return (
    <>
      <HTag level={1} className="w-full">
        {post.title}
      </HTag>
      <div className="flex w-full flex-col items-start gap-2">
        <time className="pl-[3px] text-white/[.6]">
          {parseFixedDate(post.publishedAt)}
        </time>
        <div className="flex gap-2">
          {post.tags.map((tag) => {
            return (
              <small
                key={tag.id}
                className="self-end rounded-3xl border border-white px-2"
              >
                {tag.name}
              </small>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 border-t border-slate-800 pt-8">
        {HTMLReactParser(post.contents)}
      </div>
    </>
  );
}
