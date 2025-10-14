//サイト全体の共通レイアウト（両サイドの余白）を作成
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
