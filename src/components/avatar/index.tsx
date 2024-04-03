import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  /** 画像ID */
  id: string;
  /** 画像のaltテキスト */
  alt: string;
  /** 画像の横幅 */
  width?: number;
  /** 画像の縦幅 */
  height?: number;
  /** スタイル */
  className?: string;
};

/**
 * アバターを表示する
 * @param id 画像ID
 * @param alt 代替テキスト
 */
export const Avatar = ({
  id,
  alt,
  width = 160,
  height = 160,
  className,
}: Props) => {
  return (
    <Image
      src={`/og/${id}.png`}
      alt={alt}
      width={width}
      height={height}
      className={`${twMerge("mx-auto rounded-full", className)}`}
    />
  );
};
