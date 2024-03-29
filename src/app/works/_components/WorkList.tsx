import { HTag } from "@/components/ui/HTag";
import { Work } from "@/lib/microcms";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { WorkListItem } from "./WorkListItem";

type Props = {
  contents: Work[];
};

/**
 * 制作物一覧を表示するコンポーネント
 * @param contents 制作物の配列
 */
export const WorkList = ({ contents }: Props) => {
  return (
    <>
      {contents.map((work) => {
        return <WorkListItem key={work.id} {...work} />;
      })}
    </>
  );
};
