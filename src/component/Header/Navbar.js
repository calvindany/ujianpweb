import React from "react";
import logoug from '../../logoug.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid custom-padding">
                <a className="navbar-brand  d-flex align-items-center" href="#">
                    <img src={logoug} alt="Logo" className="d-inline-block align-text-top col-2 me-4" />
                    Universitas Gunadarma
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/absensi">Absensi</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/tugas">Tugas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}