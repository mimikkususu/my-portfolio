'use client';

export function HomePage() {
    return (
        <>
            {/* 最初の挨拶セクション */}
            <section className="mt-5 pt-3 text-center">
                <h1 className="display-6 fw-bold mb-2">こんにちは!</h1>
                <p className="text-secondary">
                    私のポートフォリオを訪問いただきありがとうございます！
                </p>
            </section>

            {/* プロフィールセクション */}
            <section>
                <div className="container my-5 py-4">
                    <div className="row align-items-center justify-content-center g-5">

                        {/* 左側: 写真と名前 */}
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
                            <img
                                src="/syoumeiSyasin.jpeg"
                                alt="原島充弘の顔写真"
                                className="img-fluid rounded-circle shadow-lg border border-3 border-primary mb-3"
                                style={{
                                    objectFit: "cover",
                                    width: "210px",
                                    height: "240px",
                                }}
                            />
                            <h2 className="fw-bold text-dark-emphasis mb-1">原島 充弘</h2>
                            <p className="text-secondary mb-0">ソフトウェアエンジニア志望</p>
                        </div>

                        {/* 右側: 自己紹介 */}
                        <div className="col-12 col-md-8">
                            <span className="badge text-bg-info text-dark mb-3">
                                PROFILE SUMMARY
                            </span>

                            <p className="lead text-dark mb-4">
                                Sun Moon University（鮮文大学校）ソフトウェア融合学部 AIソフトウェア学科に在籍し、卒業を控えています。<br />
                                2023年には
                                <a href="https://no1s.biz/" className="text-dark text-decoration-underline" target="_blank">
                                    株式会社ナンバーワンソリューションズ
                                </a>
                                にて半年間インターンシップを経験しました。<br />
                                2026年2月に大学卒業予定で、同年4月より
                                <a href="https://www.isoroot.jp/" className="text-dark text-decoration-underline" target="_blank">
                                    株式会社アイソルート
                                </a>
                                にソフトウェアエンジニアとして新卒入社予定です。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
