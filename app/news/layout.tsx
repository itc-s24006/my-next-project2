import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
  children: React.ReactNode;
};

// Newsページ全体を60秒ごとに再生成
// ここで設定すると子ページにも継承される
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
