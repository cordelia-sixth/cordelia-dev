/**
 * 記事のタグを返すコンポーネント
 */
export const Tag = ({ name }: { name: string }) => {
  return <p className="rounded-3xl border border-white px-3 text-sm">{name}</p>;
};
