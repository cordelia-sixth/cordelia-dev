import { HTag } from "@/components/ui/HTag";
import { Article } from "@/lib/microcms";
import { parseFixedDate } from "@/utils/timeParser";
import { ReactNode } from "react";

type Props = {
  post: Article;
  body: ReactNode;
};

/**
 * 記事本文
 * @param post 記事データ
 * @param body パース済みの記事本文
 * */
export const ArticleBody = async ({ post, body }: Props) => {
  return (
    <>
      <div className="w-full text-center">
        <HTag level={1} className="inline-block text-left">
          {post.title}
        </HTag>
      </div>
      <div className="flex w-full flex-col items-start gap-1 pb-2 pt-10">
        <time className="pl-[3px] text-white/[.6]">
          {parseFixedDate(post.publishDate)}
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
        {body}
      </div>
    </>
  );
};
