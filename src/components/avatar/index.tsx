import Image from "next/image";

type Props = {
  /** 画像ID */
  id: string;
  /** 画像のaltテキスト */
  alt: string;
  /** 画像の横幅 */
  width?: number;
  /** 画像の縦幅 */
  height?: number;
};

/**
 * アバターを表示する
 * @param id 画像ID
 * @param alt 代替テキスト
 */
export const Avatar = ({ id, alt, width = 160, height = 160 }: Props) => {
  return (
    <Image
      src={`/${id}.png`}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto rounded-full"
    />
  );
};
