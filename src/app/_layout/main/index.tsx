/**
 * メインコンテンツをラップするコンポーネント
 */
export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex h-full flex-1 flex-col gap-6">{children}</main>;
};
