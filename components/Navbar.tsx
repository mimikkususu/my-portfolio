'use client';

import { NavbarSearch } from "./NavbarSearch";

export function Navbar() {
    return (
        <>
            {/* ✅ Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container">
                    {/* ロゴ */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="/logo.png" alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
                        Mitsuhiro Harashima
                    </a>
                    {/* メニュー */}
                    <div>
                        <a className="nav-link d-inline text-light me-3" href="/">
                            Home
                        </a>
                        <a className="nav-link d-inline text-light" href="/ProjectsPage">
                            Projects
                        </a>
                        <a className="nav-link d-inline text-light" href="/CVPage">
                            CV
                        </a>
                        <a className="nav-link d-inline text-light me-3" href="/contactPage">
                            contact
                        </a>
                        <a className="nav-link d-inline text-light me-3" href="/English">
                            English
                        </a>
                        <a className="nav-link d-inline text-light me-3" href="/English">
                            Korea
                        </a>

                        <NavbarSearch />
                    </div>
                </div>
            </nav>
        </>
    )
}