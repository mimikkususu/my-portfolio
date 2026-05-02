'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSearch } from "./NavbarSearch";
import LangSwitcher from "./LangSwitcher";
import profilePic from "@/public/logo.png";
import { log } from "console";

export function Navbar({ dict }: { dict: any }) {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'jp';
    const langPath = `/${lang}`;

    const navLinks = [
        { name: dict.navbar.home, href: langPath },
        { name: dict.navbar.projects, href: `${langPath}/ProjectsPage` },
        { name: dict.navbar.cv, href: `${langPath}/CVPage` },
        { name: dict.navbar.contact, href: `${langPath}/contactPage` },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href={langPath}>
                    <img src={profilePic.src} alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
                    Mitsuhiro Harashima
                </Link>

                <div className="d-flex align-items-center">
                    {navLinks.map((link) => (
                        <Link key={link.href} className="nav-link d-inline text-light me-3" href={link.href}>
                            {link.name}
                        </Link>
                    ))}
                    <div className="ms-2 me-3">
                        <LangSwitcher />
                    </div>
                    <NavbarSearch dict={dict} />
                </div>
            </div>
        </nav>
    );
}