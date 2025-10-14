import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

// 型チェック   コンパイル時の安全性とエディタ補完のために明示する
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
