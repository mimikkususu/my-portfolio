'use client';

import NavbarSearch from "./NavbarSearch";

export default function Navbar() {
    return (
        <>
            {/* ✅ Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container">
                    {/* ロゴ */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="/logo.png" alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
                        Mitsuhiro
                    </a>
                    {/* メニュー */}
                    <div>
                        <a className="nav-link d-inline text-light me-3" href="/">
                            Home
                        </a>
                        <a className="nav-link d-inline text-light" href="/">
                            Projects
                        </a>
                        <a className="nav-link d-inline text-light me-3" href="/">
                            CV
                        </a>
                        <a className="nav-link d-inline text-light me-3" href="/">
                            contact
                        </a>
                        <NavbarSearch />

                    </div>
                </div>
            </nav>
        </>
    )
}