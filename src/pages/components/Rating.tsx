import { Image } from "antd";
import React from "react";

function Rating() {
    return (
        <section className="rating">
            <div className="container-xl">
                <div className="section_heading">
                    <div>
                        <div className="heading_2 wow animate__animated animate__fadeInUp">
                            Best Architect with <br />
                            knowledge
                        </div>
                    </div>
                    <div>
                        <p className="wow animate__animated animate__fadeInUp">
                            Welcome to a world where spaces transform into works
                            of art. Our architects bring a touch of brilliance
                            to every project
                        </p>
                        <a href="#" className="btn_2">
                            View More
                        </a>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="users heading_3">
                            <span className="odometer" data-value="900">
                                0
                            </span>
                            k+
                        </div>
                        <span>Happy Sellers</span>
                    </div>
                    <div className="stat">
                        <div className="shipments heading_3">
                            <span className="odometer" data-value="2.8">
                                0
                            </span>
                            k+
                        </div>
                        <span>Shipments Daily</span>
                    </div>
                    <div className="stat">
                        <div className="ratings heading_3">
                            <span className="odometer" data-value="4.8">
                                0
                            </span>
                        </div>
                        <span>App Rating</span>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-4 image-card wow animate__animated animate__fadeInLeft">
                        <Image src="images/5.jpg" alt="" />
                    </div>
                    <div className="col-md-4 image-card wow animate__animated animate__fadeInUp">
                        <Image src="images/6.jpg" alt="" />
                    </div>
                    <div className="col-md-4 image-card wow animate__animated animate__fadeInRight">
                        <Image src="images/7.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rating;
