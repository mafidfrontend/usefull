import Image from "next/image";
import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container-xl">
                <div className="section_heading">
                    <div className="heading_2 wow animate__animated animate__fadeInUp">
                        Explore designs that redefine <br />
                        conventional spaces.
                    </div>
                    <p className="wow animate__animated animate__fadeInUp">
                        Embark on a journey of collaboration, where your dreams
                        become architectural masterpieces.
                    </p>
                </div>
                <div className="showcases">
                    <div className="showcase wow animate__animated animate__fadeInUp">
                        <div className="row">
                            <div className="col-md-2">
                                <Image src="images/8.jpg" alt="" />
                            </div>
                            <div className="col-md-10">
                                <div className="heading_3">
                                    High Quality Visuals
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase wow animate__animated animate__fadeInUp">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="heading_3">Unique Selling</div>
                            </div>
                            <div className="col-md-2">
                                <Image src="images/9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="showcase wow animate__animated animate__fadeInUp">
                        <div className="row">
                            <div className="col-md-2">
                                <Image src="images/10.jpg" alt="" />
                            </div>
                            <div className="col-md-10">
                                <div className="heading_3">Home Ware</div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase wow animate__animated animate__fadeInUp">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="heading_3">Selling In 2023</div>
                            </div>
                            <div className="col-md-2">
                                <Image src="images/11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="showcase wow animate__animated animate__fadeInUp">
                        <div className="row">
                            <div className="col-md-2">
                                <Image src="images/12.jpg" alt="" />
                            </div>

                            <div className="col-md-10">
                                <div className="heading_3">Medal Rate Estate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
