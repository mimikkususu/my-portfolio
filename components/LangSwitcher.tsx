"use client"

import { usePathname, useRouter } from 'next/navigation'

export default function LangSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    // 現在の言語を取得 (/jp/about -> jp)
    const currentLang = pathname.split('/')[1]

    const toggleLanguage = () => {
        const newLang = currentLang === 'jp' ? 'en' : 'jp'

        // パスを置換 (/jp/projects -> /en/projects)
        const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)

        router.push(newPath)
    }

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
            {currentLang === 'jp' ? 'English' : '日本語'}
        </button>
    )
}