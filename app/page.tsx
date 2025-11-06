import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
//コンポーネント
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "./_components/NewsList";

export const revalidate = 60; // 最新のお知らせ2件分のために60秒ごとに再生成

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーのちからで世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        {/* nextのライブラリ Image    ブラウザ幅に適したサイズの画像を自動生成する。
                                    ファイルサイズも最適化する*/}
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority // 優先的に画像を読み込む指定
          sizes="(max-width: 640px) 100vw, 50vw" // 画面幅が640px以下なら画面幅いっぱいに表示、それ以外は画面幅の半分に表示
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
