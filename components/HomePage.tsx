'use client';
import profilePic from "@/public/syoumeiSyasin.jpeg";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export function HomePage({ lang, dict }: { lang: string; dict: any }) {
    return (
        <>
            <section className="mt-5 pt-3 text-center">
                <h1 className="display-6 fw-bold mb-2">{dict.home.greeting}</h1>
                <p className="text-secondary">{dict.home.welcome_msg}</p>
            </section>

            <section>
                <div className="container my-5 py-4">
                    <div className="row align-items-center justify-content-center g-5">
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center text-center">
                            <img
                                src={profilePic.src}
                                alt={dict.home.name}
                                className="img-fluid rounded-circle shadow-lg border border-3 border-primary mb-3"
                                style={{ objectFit: "cover", width: "210px", height: "240px" }}
                            />
                            <h2 className="fw-bold text-dark-emphasis mb-1">{dict.home.name}</h2>
                            <p className="text-secondary mb-0">{dict.home.job_title}</p>
                        </div>

                        <div className="col-12 col-md-8">
                            <span className="badge text-bg-info text-dark mb-3">
                                {dict.home.profile_badge}
                            </span>
                            {/* JSON内のHTMLを反映させる */}
                            <p className="lead text-dark mb-4"
                                dangerouslySetInnerHTML={{ __html: dict.home.bio }} />
                        </div>
                        <div>
                            <Link href="https://www.isoroot.jp/recruit/blog/archives/3498" passHref target="_blank">
                                <Box as="a" p="4" borderWidth="1px" borderRadius="lg">
                                    <Text fontWeight="bold">採用ブログはこちら</Text>
                                    <Text fontSize="sm">私の人となりが伝わると思います。</Text>
                                </Box>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}