import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

export type Blog = {
  /** 記事ID */
  id: string;
  /** 記事タイトル */
  title: string;
  /** 記事本文 */
  contents: string;
  /** 記事タグ */
  tags: [
    {
      /** タグID */
      id: string;
      /** タグ名 */
      name: string;
      /** タグSlug */
      slug: string;
    },
  ];
  /** 記事アイキャッチ画像 */
  eyecatch?: MicroCMSImage;
  /** 登校日 */
  publishedAt: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/**
 * ブログ一覧を取得
 * @param queries 検索用クエリ
 */
export const getBlog = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
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

  return detailData;
};
