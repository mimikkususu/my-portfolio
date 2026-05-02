'use client';

export default function ProjectsPage() {
    return (
        <>
            {/* ページ冒頭 */}
            <section className="mt-5 pt-3 text-center">
                <h1 className="display-6 fw-bold mb-2">プロジェクト一覧!</h1>
                <p className="text-secondary">
                    今まで手がけてきたプロジェクトを紹介します。
                </p>
            </section>

            {/* テーブル部分 */}
            <section>
                <div className="container my-5 py-4">
                    <h2 className="fw-bold text-center mb-5 text-dark-emphasis">
                        🖥️ 開発実績
                    </h2>

                    <div className="table-responsive shadow-sm rounded overflow-hidden">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: '20%' }}>プロジェクト名 & 技術</th>
                                    <th style={{ width: '10%' }} className="text-center">年度</th>
                                    <th style={{ width: '50%' }}>プロジェクト概要</th>
                                    <th style={{ width: '20%' }} className="text-center">GitHub</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-bold">
                                        Japan Weather App
                                        <div className="mt-1">
                                            <span className="badge text-bg-info text-dark me-1">JavaScript</span>
                                            <span className="badge text-bg-primary me-1">Weather API</span>
                                            <span className="badge text-bg-success">HTML/CSS</span>
                                        </div>
                                    </td>
                                    <td className="text-center text-muted fw-bold">2024</td>
                                    <td>
                                        日本各地の天候をリアルタイムで取得・表示するウェブアプリ。
                                        天気APIを利用してユーザーフレンドリーなUIで実装しました。
                                    </td>
                                    <td className="text-center">
                                        <a
                                            href="https://github.com/mimikkususu/weather_app"
                                            target="_blank"
                                            className="btn btn-sm btn-dark"
                                        >
                                            <i className="bi bi-github"></i> VIEW
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="fw-bold">
                                        Telco Forecasting Model
                                        <div className="mt-1">
                                            <span className="badge text-bg-success me-1">Python</span>
                                            <span className="badge text-bg-danger">Data Analysis</span>
                                        </div>
                                    </td>
                                    <td className="text-center text-muted fw-bold">2024</td>
                                    <td>
                                        通信会社の顧客データを分析し、解約を予測する機械学習モデルを構築。
                                        企業の顧客維持戦略に活用可能な予測を実現しました。
                                    </td>
                                    <td className="text-center">
                                        <a
                                            href="https://github.com/mimikkususu/TelcoForecastingModel"
                                            target="_blank"
                                            className="btn btn-sm btn-dark"
                                        >
                                            <i className="bi bi-github"></i> VIEW
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="fw-bold">
                                        Directory
                                        <div className="mt-1">
                                            <span className="badge text-bg-primary me-1">Python</span>
                                            <span className="badge text-bg-warning text-dark me-1">Django</span>
                                            <span className="badge text-bg-info text-dark">MySQL</span>
                                        </div>
                                    </td>
                                    <td className="text-center text-muted fw-bold">2023</td>
                                    <td>
                                        奉仕活動で使用していた受付名簿を効率的に管理するために
                                        開発した名簿管理Webアプリ。Googleスプレッドシートの煩雑さを改善しました。
                                    </td>
                                    <td className="text-center">
                                        <a
                                            href="https://github.com/HaraYone/directory"
                                            target="_blank"
                                            className="btn btn-sm btn-dark"
                                        >
                                            <i className="bi bi-github"></i> VIEW
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-end text-muted small mt-3 pt-3">
                        ※ すべてのコードは GitHub にて公開中です。
                    </p>
                </div>
            </section>
        </>
    );
}
