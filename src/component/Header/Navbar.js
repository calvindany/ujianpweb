import React from "react";
import logoug from '../../logoug.png';

export default function Navbar() {
    return (
        <nav>
            <div className="custom-padding navbar">
                <img src={logoug} className="logoug" />
                <h3>Universitas Gunadarma</h3>
            </div>
        </nav>
    )
}