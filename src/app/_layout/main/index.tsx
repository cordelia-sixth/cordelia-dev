import { type ReactNode } from "react";

/**
 * 画面幅に応じてコンテンツの横幅を調整し、中央寄せにするコンポーネント
 * @returns main
 */
export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="flex flex-1 flex-col gap-6 py-16">{children}</main>;
};
