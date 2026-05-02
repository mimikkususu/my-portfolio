import { getDictionary } from "../dictionaries";
import ContactPageClient from "@/components/contactPage"; // 後述するコンポーネント

// ページ本体（サーバーコンポーネント：'use client' は付けない）
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // 取得したデータをクライアントコンポーネントに渡す
    return <ContactPageClient dict={dict} />;
}