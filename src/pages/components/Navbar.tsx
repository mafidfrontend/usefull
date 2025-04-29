import { Image } from "antd";
import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <nav className="container-fluid">
            <div className="container-xl">
                <Link href={"/"} className="logo">
                    <Image src="images/logo.png" alt="" />
                </Link>
                <Link href={"/"}>Home</Link>
                <a href="#">Studio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">FAQ`s</a>
                <a href="mailto:hellow.ashutosh@gmail.com" className="btn_1">
                    Let's talk
                </a>
                <div className="menu">
                    <Image src="images/hamburger.png" alt="" />
                </div>
                <div className="menu_container">
                    <Link href="#">Home</Link>
                    <a href="#">Studio</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ`s</a>
                    <a href="mailto:hellow.ashutosh@gmail.com" className="btn_1">
                        Let's talk
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
