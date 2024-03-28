import { LIMIT } from "@/constants/microcms";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

/**
 * ページネーション
 */
export const PageNation = ({
  /** 記事の総数 */
  totalCount,
  /** 現在のページ */
  current = 1,
  /** 遷移先URL */
  basePath = "blog",
  /** URLクエリ */
  q,
}: Props) => {
  /**
   * ページネーションの数（分割するページの総数）を算出する
   * 記事の総数 / 1ページに表示する記事数 = ページネーション数
   * 例：記事が15あって、1ページに表示したい数が5の時、15 / 5 でページネーション（ページ数）は3
   */
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map(
    (_, i) => i + 1,
  );

  return (
    <ul>
      {pages.map((p) => (
        <li key={p}>
          {/* デフォルトで1ページ目を表示する */}
          {current !== p ? (
            // 遷移先のURLを決定する
            // ここでは blog/page/1 とか search/page/1 とかになる
            //
            <Link
              // TODO: 記事検索にもページネーションを付ける
              // href={`/${basePath}/page/${p}` + (q ? `?q=${q}` : "")}
              href={`/${basePath}/page/${p}`}
              className="bg-red-200"
            >
              {p}
            </Link>
          ) : (
            <span>{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
