import { HTag } from "@/components/ui/HTag";
import { Work } from "@/lib/microcms";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  contents: Work[];
};

/**
 * 制作物一覧を表示するコンポーネント
 * @param contents 制作物の配列
 */
export const WorkList = ({ contents }: Props) => {
  console.log("💀", contents);

  if (!contents || contents.length === 0)
    return <HTag level={2}>データがありません。</HTag>;

  return (
    <>
      {contents.map((work) => {
        return (
          <Link
            key={work.id}
            href={`/work/${work.slug}`}
            className="flex flex-col gap-3 rounded-lg bg-slate-600 p-3"
          >
            <HTag level={2}>{work.title}</HTag>
            <div className="flex flex-col">
              <p className="">{work.description}</p>
              <div className="flex items-center gap-2 self-end">
                <small>Read more</small>
                <FaArrowRightLong
                  size={15}
                  className="animate-arrowAnimation"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
