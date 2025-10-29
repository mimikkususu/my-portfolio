'use client';

export default function contactPage() {
    return (
        <>
            <section className="mt-5 pt-3">
                <h1 className="display-6">Contact</h1>
                <p>ご連絡お待ちしています。</p>
            </section>
            <section>
                <table className="table table-borderless align-middle fs-5">
                    <tbody>
                        <tr>
                            <td className="text-secondary p-1" style={{ width: '2rem' }}>
                                <i className="bi bi-mortarboard-fill"></i>
                            </td>
                            <td className="text-secondary p-1" style={{ width: '6rem' }}>
                                大学
                            </td>
                            <td className="text-secondary p-1" style={{ width: '1rem' }}>:</td>
                            <td className="fw-bold p-1">
                                <a href="https://lily.sunmoon.ac.kr/MainDefault3.aspx" className="text-dark text-decoration-underline" target="_blank">Sun Moon University</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-1">
                                <i className="bi bi-phone-fill"></i>
                            </td>
                            <td className="text-secondary p-1">
                                電話
                            </td>
                            <td className="text-secondary p-1">:</td>
                            <td className="fw-bold p-1">
                                010-4638-2151
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-1">
                                <i className="bi bi-envelope-fill"></i>
                            </td>
                            <td className="text-secondary p-1">
                                Email
                            </td>
                            <td className="text-secondary p-1">:</td>
                            <td className="fw-bold p-1">
                                <a href="mailto:mthr35@gmail.com" className="text-decoration-none text-dark">mthr35@gmail.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-1">
                                <i className="bi bi-geo-alt-fill"></i>
                            </td>
                            <td className="text-secondary p-1">
                                住所
                            </td>
                            <td className="text-secondary p-1">:</td>
                            <td className="fw-bold p-1" style={{ wordBreak: 'keep-all' }}>
                                136 Galsan-ri, Tangjeong-myeon, Asan-si, Chungcheongnam-do
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.4059056606927!2d127.07252411527968!3d36.79906221094404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ad8f2bbf1f8eb%3A0x62d9d1e3d24fa7c3!2sSun%20Moon%20University%2C%20Asan%20Campus!5e0!3m2!1sen!2skr!4v1761738463818!5m2!1sen!2skr"
                        width="100%"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sun Moon University Location Map"
                    ></iframe>
                </div>
            </section>
        </>
    )
}