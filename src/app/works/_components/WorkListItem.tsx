import { HTag } from "@/components/ui/HTag";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  id: string;
  title: string;
  slug: string;
  description: string;
};

/**
 * workページのカードUI
 */
export const WorkListItem = ({ id, title, slug, description }: Props) => {
  return (
    <Link
      href={`/works/${id}`}
      className="flex flex-col gap-3 rounded-lg bg-slate-600 p-3"
    >
      <HTag level={2}>{title}</HTag>
      <div className="flex flex-col">
        <p className="">{description}</p>
        <div className="flex items-center gap-2 self-end">
          <small>Read more</small>
          <FaArrowRightLong size={15} className="animate-arrowAnimation" />
        </div>
      </div>
    </Link>
  );
};
