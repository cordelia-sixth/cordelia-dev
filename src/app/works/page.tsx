import { getWorkList } from "@/lib/microcms";
import { TwoColumnContainer } from "../_layout/TwoColumnContainer";
import { WorkListItem } from "./_components/WorkListItem";
import { WorkList } from "./_components/WorkList";

/**
 * worksページを返すコンポーネント
 */
const Page = async () => {
  const { contents } = await getWorkList();

  return (
    <TwoColumnContainer>
      <WorkList contents={contents} />
    </TwoColumnContainer>
  );
};

export default Page;
