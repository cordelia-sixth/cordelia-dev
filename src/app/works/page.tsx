import { TwoColumnContainer } from "../_layout/TwoColumnContainer";
import { WorkListItem } from "./_components/WorkListItem";

/**
 * worksページを返すコンポーネント
 */
const Page = () => {
  return (
    <TwoColumnContainer>
      <WorkListItem
        name="cordelia.dev"
        description="このサイトです。"
        url="cordeliadev"
      />
    </TwoColumnContainer>
  );
};

export default Page;
