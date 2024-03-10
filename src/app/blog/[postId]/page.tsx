import { getBlog, getDetail } from "@/lib/microcms";
import parse from "html-react-parser";
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
  const $ = load(post.contents, null, false);
  $("pre code").each((_, element) => {
    const result = hljs.highlightAuto($(element).text(), [
      "javascript",
      "typescript",
      "css",
      "html",
      "bash",
    ]);
    $(element).html(result.value);
    $(element).addClass("hljs");
  });
  $("pre").each((_, element) => {
    $(element).addClass("rounded-lg bg-slate-800 overflow-x-auto");
  });
  $("code").each((_, elm) => {
    $(elm).addClass("rounded-lg bg-slate-800 p-1");
  });
  $("h2").each((_, elm) => {
    $(elm).addClass(
      "text-xl font-bold sm:text-2xl border-b pb-2 border-slate-800",
    );
  });

  // TODO: 諸々表示を加工する
  return (
    <>
      <div className="w-full text-center">
        <HTag level={1} className="inline-block text-left">
          {post.title}
        </HTag>
      </div>
      <div className="flex w-full flex-col items-start gap-1 pb-2 pt-10">
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
      <div className="flex w-full flex-col gap-6 border-t border-slate-800 pt-6">
        {parse($.html())}
      </div>
    </>
  );
}
