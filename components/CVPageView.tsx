'use client';

export default function CVPageView({ lang, dict }: { lang: string; dict: any }) {
    // サーバー側でデータ取得済みなので、ここでは単純に表示するだけ
    return (
        <>
            <section className="mt-5 pt-3 text-center">
                <h1 className="display-6 fw-bold mb-2">{dict.cv.title}</h1>
                <p className="text-secondary">{dict.cv.description}</p>
            </section>

            <section>
                <div className="container my-5">
                    {/* 学士課程 */}
                    <div className="mb-5">
                        <h4 className="fw-bold text-primary mb-1">{dict.cv.bachelor_title}</h4>
                        <p className="text-muted small mb-1">{dict.cv.bachelor_period}</p>
                        <p className="mb-1">
                            <a href="https://lily.sunmoon.ac.kr/MainDefault3.aspx" target="_blank" className="text-dark text-decoration-underline">
                                Sun Moon University（鮮文大学校）
                            </a>
                            — {lang === 'en' ? 'Dept. of AI Software' : 'ソフトウェア融合学部 AIソフトウェア学科'}
                        </p>
                        <p className="small text-muted mb-0">{dict.cv.bachelor_detail}</p>
                    </div>

                    {/* 高校 */}
                    <div className="mb-5">
                        <h4 className="fw-bold mb-1">{dict.cv.hs_title}</h4>
                        <p className="text-muted small mb-1">{dict.cv.hs_period}</p>
                        <p className="mb-1">{dict.cv.hs_name}</p>
                        <p className="small text-muted mb-0">{dict.cv.hs_detail}</p>
                    </div>

                    {/* 奉仕・業務経験 */}
                    <div>
                        <h4 className="fw-bold mb-1">{dict.cv.exp_title}</h4>
                        <p className="text-muted small mb-1">{dict.cv.exp_period}</p>
                        <p className="mb-1">{dict.cv.exp_name}</p>
                        <p className="small text-muted mb-0">{dict.cv.exp_detail}</p>
                    </div>
                </div>
            </section>
        </>
    );
}