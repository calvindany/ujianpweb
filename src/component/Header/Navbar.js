import React from "react";
import logoug from '../../logoug.png';

export default function Navbar() {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid custom-padding">
                <a className="navbar-brand  d-flex align-items-center" href="#">
                    <img src={logoug} alt="Logo" className="d-inline-block align-text-top col-2 me-4"/>
                        Universitas Gunadarma
                </a>
            </div>
        </nav>
    )
}