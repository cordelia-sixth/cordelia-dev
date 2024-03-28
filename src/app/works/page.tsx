import { TwoColumnContainer } from "../_layout/TwoColumnContainer";
import { WorkCard } from "./_components/WorkCard";

/**
 * worksページを返すコンポーネント
 */
const Page = () => {
  return (
    <TwoColumnContainer>
      <WorkCard
        name="cordelia.dev"
        description="このサイトです。"
        url="cordeliadev"
      />
    </TwoColumnContainer>
  );
};

export default Page;
