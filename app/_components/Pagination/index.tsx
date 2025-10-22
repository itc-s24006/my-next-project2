import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number; // 記事の件数
  current?: number; // 現在のページ番号
  basePath?: string; // ページネーションのベースパス（デフォルトは /news ）
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  /* .from()  第一引数に渡されたオブジェクトから新しい配列を生成する
       第二引数では作成した配列からインデックスを＋１した配列を返す
       (_, i)  第一引数は要素の値、第二引数はインデックス（ここでは使わないので _ にしている）
    */
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
