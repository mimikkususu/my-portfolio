import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "@/app/globals.css";
// 1. getDictionary をインポート
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
  title: "Mitsuhiro Harashima",
  description: "Portfolio website of mitsuhiro",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // 2. 辞書データを取得
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* Bootstrap CDN */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* Bootstrap Icons (もし使っているなら追加) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body>
        {/* 3. dict={undefined} ではなく、取得した dict を渡す */}
        <Navbar dict={dict} />

        <main className="container mt-4">{children}</main>

        <footer className="text-center text-muted mt-5 mb-3">
          © 2026 Mitsuhiro Harashima
        </footer>

        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}