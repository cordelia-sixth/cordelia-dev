import { type HTMLProps, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLProps<HTMLHeadingElement> & {
  children: ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
};

/**
 * 指定した見出しレベルのHeadingタグを返すコンポーネント
 * @param level 見出しレベル
 * @param className 追加スタイル
 */
export const HTag = ({ children, level, className, ...props }: Props) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={twMerge("text-2xl font-bold sm:text-3xl", className)}
          {...props}
        >
          {children}
        </h1>
      );
      break;
    case 2:
      return (
        <h2
          className={twMerge("text-xl font-bold sm:text-2xl", className)}
          {...props}
        >
          {children}
        </h2>
      );
      break;
    case 3:
      return (
        <h3
          className={twMerge("text-lg font-bold sm:text-xl", className)}
          {...props}
        >
          {children}
        </h3>
      );
      break;
    case 4:
      return (
        <h4
          className={twMerge("text-base font-bold sm:text-lg", className)}
          {...props}
        >
          {children}
        </h4>
      );
      break;
  }
};
