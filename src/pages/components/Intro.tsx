import Image from "next/image";
import React from "react";

function Intro() {
    return (
        <section className="intro">
            <div className="container-xl">
                <div className="heading_1 wow animate__animated animate__fadeInUp">
                    Unveiling <br />
                    Architectural <br />
                    Mastery
                </div>
                <p className="wow animate__animated animate__fadeInUp">
                    Our architects breathe life into dreams, creating
                    environments where innovation meets tradition, and spaces
                    transcend mere structures
                </p>
                <div className="projects">
                    <div className="project wow animate__animated animate__fadeInUp">
                        <Image src="images/2.jpg" alt="" />
                    </div>
                    <div className="project wow animate__animated animate__fadeInUp">
                        <Image src="images/3.jpg" alt="" />
                    </div>
                </div>

                <a href="#" className="btn_2">
                    View Projects
                </a>
            </div>
        </section>
    );
}

export default Intro;
