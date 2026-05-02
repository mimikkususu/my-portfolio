import { getDictionary } from "../dictionaries";
import CVPageView from "@/components/CVPageView"; // 次の手順で作成/移動します

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    // サーバー側で安全に await する
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // クライアントコンポーネントにデータを渡す
    return <CVPageView lang={lang} dict={dict} />;
}