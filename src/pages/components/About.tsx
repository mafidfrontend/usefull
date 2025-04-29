import { Image } from "antd";
import React from "react";

function About() {
    return (
        <section className="about">
            <div className="container-xl">
                <div className="section_heading">
                    <div>
                        <p className="wow animate__animated animate__fadeInUp">
                            Our architects blend creativity and functionality to
                            redefine the way you experience your surroundings.
                        </p>
                        <a href="#" className="btn_2">
                            View More
                        </a>
                    </div>
                    <div>
                        <div className="heading_2 wow animate__animated animate__fadeInUp">
                            Best Architect with <br />
                            knowledge
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="card wow animate__animated animate__fadeInUp">
                            <div className="card_header">
                                <span> 01 </span>
                                <div className="icon">
                                    <Image src="images/arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="heading_3">
                                    Visionary <br />
                                    Design
                                </div>
                                <p>
                                    Our commitment to cutting-edge design and
                                    sustainable practices ensures that our
                                    creations stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card wow animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="card_header">
                                <span> 02 </span>
                                <div className="icon">
                                    <Image src="images/arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="heading_3">
                                    Architectural <br />
                                    Detailing
                                </div>
                                <p>
                                    Experience the perfect blend of innovation
                                    and sophistication as we craft spaces that
                                    reflect your unique style.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card_bg wow animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="card_header">
                                <span> 03 </span>
                                <div className="icon">
                                    <Image src="images/arrow-black.png" alt="" />
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="heading_3">
                                    Pleasantly <br />
                                    Redesign
                                </div>
                                <p>
                                &quot;Transform your living space with a home
                                    redesign that adds style, functionality, and
                                    a fresh perspective to your environment.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
