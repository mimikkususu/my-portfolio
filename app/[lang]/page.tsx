import { HomePage } from "@/components/HomePage";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  // 1. URLから言語を取得
  const { lang } = await params;

  // 2. コメントアウトを外し、実際に辞書データを取得する
  const dict = await getDictionary(lang);

  return (
    <>
      {/* 3. undefined ではなく、取得した dict を渡す */}
      <HomePage lang={lang} dict={dict} />
    </>
  );
}