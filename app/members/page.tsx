import Image from "next/image";
import { getMemberList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
  // { limit: 100 }  デフォは10件だが、100件まで取得可能に変更
  const data = await getMemberList({ limit: MEMBERS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              {/* dl  定義リストを作るためのHTML構造タグ。全体の囲い
                  dt  定義される用語
                  dd  説明 */}
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
