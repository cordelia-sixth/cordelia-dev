import { type Blog } from "@/lib/microcms";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import parse from "html-react-parser";

/**
 * HTMLを加工して返す
 * @param post 記事のHTML
 */
export const parseHtml = (post: Blog) => {
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

  return parse($.html());
};
