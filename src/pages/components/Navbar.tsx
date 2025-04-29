import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <nav className="container-fluid">
            <div className="container-xl">
                <a href="index.html" className="logo">
                    <Image src="images/logo.png" alt="" />
                </a>
                <Link href={"/"}>Home</Link>
                <a href="#">Studio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">FAQ`s</a>
                <a href="mailto:neo.uz001@gmail.com" className="btn_1">
                    Let&apos;s talk
                </a>
                <div className="menu">
                    <Image src="images/hamburger.png" alt="" />
                </div>
                <div className="menu_container">
                    <Link href={"/"}>Home</Link>
                    <a href="#">Studio</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ`s</a>
                    <a href="mailto:neo.uz001@gmail.com" className="btn_1">
                        Let&apos;s talk
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
