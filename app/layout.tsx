import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
    </html>
  );
}
