import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {/* children  JSX、文字列、配列、null など「レンダー可能なもの」全般が格納されてる。
                      （型は React.ReactNode）
                      同じディレクトリのレンダリング結果(page.tsxや子ルートのpage.tsx
                      の内容)が自動でchildrenに入る。 */}
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-4V6J47WRQJ" />
    </html>
  );
}
