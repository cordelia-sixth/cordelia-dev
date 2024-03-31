/**
 * Header, Main, Footerをラップしてスタイルを調整するコンポーネント
 */
export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[650px] flex-col gap-11 p-6 text-base tracking-wider text-white/[.8] sm:text-lg">
      {children}
    </div>
  );
};
