import { type ReactNode } from "react";

/**
 * 画面幅に応じてコンテンツの横幅を調整し、中央寄せにするコンポーネント
 * @returns main
 */
export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="grid place-items-center gap-4 py-8">{children}</main>;
};
