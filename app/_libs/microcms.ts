import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Missing MICROCMS_API_KEY is required");
}

//createClient    sdkに用意されている関数。クライアントを作成する
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// メンバー一覧を取得する関数
export const getMemberList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};
/* MicroCMSQueries  microCMSが提供するクエリパラメータの型情報
  getList           microCMSから一覧データを取得するためのメソッド。クライアントで用意されている。
*/

// ニュース一覧を取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

// ニュース詳細を取得する関数
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    // ISRの設定 (データ単位のキャッシュ制御)
    customRequestInit: {
      next: {
        // draftKeyが指定されていないときは60、指定されてるときは0秒に設定
        // つまり下書きプレビューの時だけSSRを行い、それ以外はISRを行う
        revalidate: queries?.draftKey ? 60 : 0,
      },
    },
  });
  return detailData;
};

// カテゴリー詳細を取得する関数
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};
// getListDetail microCMSから特定のコンテンツの詳細データを取得するためのメソッド。

// ニュースのコンテンツをすべて取得する関数
export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: "news",
  });
  return listData;
};

// カテゴリーのコンテンツをすべて取得する関数
export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: "categories",
  });
  return listData;
};
