import { Image } from "antd";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container-xl">
                <div className="footer">
                    <div>
                        <Link
                            href={"/"}
                            className="logo wow animate__animated animate__fadeInUp"
                        >
                            <Image src="images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div>
                        <div className="heading_3 wow animate__animated animate__fadeInUp">
                            Enter Your Email To <br />
                            Get The Latest News
                        </div>
                        <div className="input_container wow animate__animated animate__fadeInUp">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                            />
                            <button className="btn_1">
                                <a href="mailto:neo.uz001@gmail.com">
                                    Submit
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <small>MAFID &copy; 2025</small>
            </div>
        </footer>
    );
}

export default Footer;
