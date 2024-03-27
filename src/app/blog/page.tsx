import { ArticleList } from "./_components/article/ArticleList";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 min-[426px]:grid min-[426px]:grid-cols-2">
      <ArticleList />
    </div>
  );
}
