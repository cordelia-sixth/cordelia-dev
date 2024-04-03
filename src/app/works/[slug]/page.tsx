import { HTag } from "@/components/ui/HTag";
import { Tag } from "@/components/ui/Tag";
import { Work, getWorkDetail, getWorkList } from "@/lib/microcms";
import Image from "next/image";
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
  const work = await getWorkDetail(params.slug);
  if (!work) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <HTag level={1}>{work.title}</HTag>
      <div className="h-[40vh]">
        <Image
          src={work.thumbnail.url}
          width={1000}
          height={500}
          style={{
            height: "100%",
            objectFit: "cover",
          }}
          alt="制作物の画像"
        />
      </div>
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
        href={work.domain}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-baseline gap-2 rounded-lg border px-8 py-2 transition active:scale-110"
      >
        サイトを見る
        <FaExternalLinkAlt size={15} />
      </Link>
    </div>
  );
};

export default Page;
