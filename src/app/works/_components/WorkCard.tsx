import { HTag } from "@/components/ui/HTag";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  name: string;
  description: string;
  url: string;
};

/**
 * workページのカードUI
 */
export const WorkCard = ({ name, description, url }: Props) => {
  return (
    <Link
      href={`/works/${url}`}
      className="flex flex-col gap-3 rounded-lg border border-slate-600 p-4"
    >
      <HTag
        level={2}
        className="rounded-lg border border-slate-600 py-8 text-center"
      >
        {name}
      </HTag>
      <div className="flex flex-col gap-10">
        <p>{description}</p>
        <div className="flex items-center gap-1 self-end">
          <small>Read more</small>
          <FaArrowRightLong size={15} />
        </div>
      </div>
    </Link>
  );
};
