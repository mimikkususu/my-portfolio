'use client';

export default function CVPage() {
    return (
        <>
            <section className="mt-5 pt-3 text-center">
                <h1 className="display-6 fw-bold mb-2">学歴・経歴</h1>
                <p className="text-secondary">
                    私の学歴と実務経験を簡潔にご紹介します。
                </p>
            </section>

            <section>
                <div className="container my-5">
                    {/* 学士課程 */}
                    <div className="mb-5">
                        <h4 className="fw-bold text-primary mb-1">学士課程（Bachelor’s Degree）</h4>
                        <p className="text-muted small mb-1">2021年3月 – 2026年2月（予定）</p>
                        <p className="mb-1">
                            <a
                                href="https://lily.sunmoon.ac.kr/MainDefault3.aspx"
                                target="_blank"
                                className="text-dark text-decoration-underline"
                            >
                                Sun Moon University（鮮文大学校）
                            </a>
                            — ソフトウェア融合学部 AIソフトウェア学科
                        </p>
                        <p className="small text-muted mb-0">
                            人工知能とソフトウェア開発を中心に学習。
                            PythonやJavaScriptを用いた開発、AIモデル構築、データ分析を経験。
                        </p>
                    </div>

                    {/* 高校 */}
                    <div className="mb-5">
                        <h4 className="fw-bold mb-1">高校卒業</h4>
                        <p className="text-muted small mb-1">2018年4月 – 2021年3月</p>
                        <p className="mb-1">〇〇高等学校</p>
                        <p className="small text-muted mb-0">
                            情報処理やプログラミングに関心を持ち、基礎的なアルゴリズムとICTスキルを学ぶ。
                        </p>
                    </div>

                    {/* 奉仕活動・業務経験 */}
                    <div>
                        <h4 className="fw-bold mb-1">奉仕活動・業務経験</h4>
                        <p className="text-muted small mb-1">2023年（半年間）</p>
                        <p className="mb-1">韓国企業での受付名簿管理</p>
                        <p className="small text-muted mb-0">
                            Googleスプレッドシートを使用した名簿管理業務を担当。
                            手動作業の非効率さを改善するため、後に名簿管理アプリを自主開発。
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
