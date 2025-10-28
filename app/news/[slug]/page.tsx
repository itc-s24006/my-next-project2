import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };

  searchParams: {
    dk?: string;
  };
};

// もともと動的レンダリングだが、revalidate=0を指定しないとCDNキャッシュがずっと残って、
// ユーザのアクセス時にWebサーバまでリクエストが到達しない。
export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk, // dkキーをリクエストに含めることで下書き記事も取得可能
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
