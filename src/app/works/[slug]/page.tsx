import { HTag } from "@/components/ui/HTag";
import { Tag } from "@/components/ui/Tag";
import { Work, getWorkDetail, getWorkList } from "@/lib/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

export const generateStaticParams = async () => {
  const { contents } = await getWorkList();
  const paths = contents.map((work) => {
    return {
      slug: work.id,
    };
  });

  return paths;
};

type Props = {
  params: {
    slug: string;
  };
};

/**
 * works詳細ページ
 */
const Page = async ({ params }: Props) => {
  const work: Work = await getWorkDetail(params.slug);
  if (!work) {
    notFound();
  }
  console.log(work.tools);

  return (
    <div className="flex flex-col items-center gap-8">
      <HTag level={1}>{work.title}</HTag>
      <p>ここに画像</p>
      <p className="self-start">{work.description}</p>
      <div className="flex flex-col gap-2 self-start">
        <HTag level={3}>使用技術</HTag>
        <div className="flex flex-wrap gap-2">
          {work.tools.map((item) => {
            return <Tag key={item.id} {...item} />;
          })}
        </div>
      </div>
      <Link
        href="#"
        className="flex items-baseline gap-2 rounded-lg border px-8 py-2 transition active:scale-110"
      >
        使ってみる
        <FaExternalLinkAlt size={15} />
      </Link>
    </div>
  );
};

export default Page;
