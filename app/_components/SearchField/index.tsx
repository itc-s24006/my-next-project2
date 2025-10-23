"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォームのデフォルトの送信を防止
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`); // 検索結果ページへ遷移
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}

/* 分ける理由:
    useSearchParams()は、URLなどがまだ確定していないときは値を返せない。
    SearchField全体をサスペンスで囲むと、ページ全体のレンダリングが一瞬止まる可能性があるから、
    サスペンドの影響を受ける部分（＝useSearchParams を使ってる部分）だけを分離させパフォーマンスを向上させている
*/
export default function SearchField() {
  return (
    // Suspense = Reactの機能。データなどの読み込みが終わるまで待つための仕組み
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
