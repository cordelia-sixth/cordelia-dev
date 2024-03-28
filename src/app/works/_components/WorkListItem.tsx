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
export const WorkListItem = ({ name, description, url }: Props) => {
  return (
    <Link
      href={`/works/${url}`}
      className="flex flex-col gap-3 rounded-lg bg-slate-800 p-4"
    >
      <HTag level={2} className="border-b py-8 text-center">
        {name}
      </HTag>
      <div className="flex flex-col gap-10">
        <p>{description}</p>
        <div className="flex items-center gap-2 self-end">
          <small>Read more</small>
          <FaArrowRightLong size={15} className="animate-arrowAnimation" />
        </div>
      </div>
    </Link>
  );
};
