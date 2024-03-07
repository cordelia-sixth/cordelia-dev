import Image from "next/image";

type Props = {
  /** 画像ID */
  id: string;
  /** 画像のaltテキスト */
  alt: string;
};

/**
 * アバターを表示する
 * @param param0
 */
export const Avatar = ({ id, alt }: Props) => {
  return (
    <Image
      src={`/${id}.png`}
      alt={alt}
      width="200"
      height="200"
      className="rounded-full"
    />
  );
};
