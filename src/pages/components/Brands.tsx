import Image from "next/image";
import React from "react";

function Brands() {
    return (
        <section className="brands">
            <div className="container-xl">
                <div className="section_heading">
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
                    <div>
                        <div className="heading_2 wow animate__animated animate__fadeInUp">
                            Our Architect with <br />
                            Known Company
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp">
                        <Image src="images/brands-1.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-1s">
                        <Image src="images/brands-2.png " alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-2s">
                        <Image src="images/brands-3.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-3s">
                        <Image src="images/brands-4.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp">
                        <Image src="images/brands-5.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-1s">
                        <Image src="images/brands-6.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-2s">
                        <Image src="images/brands-7.png" alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 brand-holder">
                    <div className="brand-image wow animate__animated animate__fadeInUp animate__delay-3s">
                        <Image src="images/brands-8.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;
