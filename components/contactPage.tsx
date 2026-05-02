'use client';

export default function ContactPageClient({ dict }: { dict: any }) {
    const contactInfo = [
        { icon: "bi-mortarboard-fill", label: dict.contact.university, value: <a href="https://lily.sunmoon.ac.kr/MainDefault3.aspx" className="text-dark text-decoration-underline" target="_blank">Sun Moon University</a> },
        { icon: "bi-phone-fill", label: dict.contact.phone, value: "010-4638-2151" },
        { icon: "bi-envelope-fill", label: dict.contact.email, value: <a href="mailto:mthr35@gmail.com" className="text-decoration-none text-dark">mthr35@gmail.com</a> },
        { icon: "bi-geo-alt-fill", label: dict.contact.address, value: "136 Galsan-ri, Tangjeong-myeon, Asan-si, Chungcheongnam-do" },
    ];

    return (
        <>
            <section className="mt-5 pt-3">
                <h1 className="display-6">{dict.contact.title}</h1>
                <p>{dict.contact.description}</p>
            </section>

            <section>
                <table className="table table-borderless align-middle fs-5">
                    <tbody>
                        {contactInfo.map((info, index) => (
                            <tr key={index}>
                                <td className="text-secondary p-1" style={{ width: '2rem' }}>
                                    <i className={`bi ${info.icon}`}></i>
                                </td>
                                <td className="text-secondary p-1" style={{ width: '6rem' }}>{info.label}</td>
                                <td className="text-secondary p-1" style={{ width: '1rem' }}>:</td>
                                <td className="fw-bold p-1" style={{ wordBreak: 'keep-all' }}>{info.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?..." // URLはそのまま
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Sun Moon University Location Map"
                ></iframe>
            </section>
        </>
    );
}