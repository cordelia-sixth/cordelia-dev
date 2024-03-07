import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

/**
 * ブログ情報の型
 */
export type Blog = {
  id: string;
  title: string;
  contents: string;
  tags: [
    {
      id: string;
      name: string;
      slug: string;
    },
  ];
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

/**
 * API取得用のクライアント
 */
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/**
 * ブログ一覧を取得
 */
export const getBlog = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  return listData;
};

/**
 * ブログ詳細を取得
 */
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
