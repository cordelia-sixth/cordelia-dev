import { getWorkList } from "@/lib/microcms";
import { TwoColumnContainer } from "../_layout/TwoColumnContainer";
import { WorkList } from "./_components/WorkList";
import { HTag } from "@/components/ui/HTag";

/**
 * works一覧ページ
 * /works
 */
const Page = async () => {
  const { contents } = await getWorkList();
  if (!contents || contents.length === 0)
    return <HTag level={2}>データがありません。</HTag>;

  return (
    <TwoColumnContainer>
      <WorkList contents={contents} />
    </TwoColumnContainer>
  );
};

export default Page;
