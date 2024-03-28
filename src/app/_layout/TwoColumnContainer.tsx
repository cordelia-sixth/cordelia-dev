/**
 * 画面幅に合わせてコンテンツを2カラムにするコンテナ
 */
export const TwoColumnContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3 min-[426px]:grid min-[426px]:grid-cols-2">
      {children}
    </div>
  );
};
