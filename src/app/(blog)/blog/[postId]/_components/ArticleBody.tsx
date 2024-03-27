import { HTag } from "@/components/ui/HTag";
import { Tag } from "@/components/ui/Tag";
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
      <div className="w-full pt-6 text-center">
        <HTag level={1} className="inline-block text-left">
          {post.title}
        </HTag>
      </div>
      <div className="flex flex-col items-start gap-1 pt-6">
        <time className="text-white/[.6]">
          {parseFixedDate(post.publishDate)}
        </time>
        <div className="flex gap-2">
          {post.tags.map((tag) => {
            return <Tag key={tag.id} name={tag.name} />;
          })}
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 border-t border-slate-800 pt-6">
        {body}
      </div>
    </>
  );
};
