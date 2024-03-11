import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";
import { Metadata } from "next";
import { string } from "prop-types";

export type Blog = {
  /** 記事ID */
  id: string;
  /** 記事タイトル */
  title: string;
  /** 投稿日 */
  publishDate: string;
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
} & MicroCMSDate;

const endpoint = "blogs";

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
export const getBlog = async (
  queries?: MicroCMSQueries,
): Promise<MicroCMSListResponse<Blog>> => {
  return await client.getList<Blog>({
    endpoint,
    queries,
  });
};

/**
 * ブログ詳細を取得
 */
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

/** 下書き中の記事を取得 */
export const getBlogDraft = async (
  contentId: string,
  queries: MicroCMSQueries & { draftKey: string },
) => {
  return await client.get<Blog>({
    endpoint,
    contentId,
    queries,

    /**
     * draftKey（下書き中記事のID）が不変でも記事内容は変わる可能性があるためキャッシュしない
     * つまり下書き記事は編集しながらプレビューすることになるので、編集してからnextにまたリクエストを送ることになるが
     * その度にdraftKeyは変わらない。するとnextはレスポンスをキャッシュしてしまうためリロードなどをしないと
     * 修正が反映されない。だからキャッシュしないように設定する
     */
    customRequestInit: { cache: "no-cache" },
  });
};

/** 記事ページのメタデータ生成 */
export const generateArticleMetadata = async (
  articleId: string,
  draftKey?: string | string[],
): Promise<Metadata | void> => {
  let blog: Blog | null = null;

  // draftKeyが存在すればtrue
  const isDraft = typeof draftKey === "string";

  if (isDraft) {
    // 下書き記事を取得
    blog = await getBlogDraft(articleId, { draftKey });
  } else {
    // 公開中の記事を取得
    blog = await getDetail(articleId);
  }

  if (blog) {
    // 公開記事と下書き記事でページタイトルを変更
    const { title } = blog;
    return { title: isDraft ? `[プレビュー] ${title}` : title };
  }
};
