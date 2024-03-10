import { HTag } from "@/components/ui/HTag";
import Link from "next/link";

/**
 * 404ページ
 */
const NotFound = () => {
  return (
    <div className="flex flex-col gap-2">
      <HTag level={1}>ページが見つかりません。</HTag>
      <div>
        <p>お探しのページは見つかりませんでした。</p>
        <p>URLが間違っているか、削除された可能性があります。</p>
        <Link href="/">
          <HTag level={4} className="pt-3">
            トップページへ戻る
          </HTag>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
