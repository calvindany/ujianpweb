import React from "react";
import logoug from '../../logoug.png';

export default function Navbar() {
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid custom-padding">
                <a class="navbar-brand  d-flex align-items-center" href="#">
                    <img src={logoug} alt="Logo" class="d-inline-block align-text-top col-2 me-4"/>
                        Universitas Gunadarma
                </a>
            </div>
        </nav>
    )
}