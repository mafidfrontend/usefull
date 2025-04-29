import { Image } from "antd";
import React from "react";

interface MyComponentProps {
    children: React.ReactNode;
    behavior: string;
    direction: string;
    scrollamount: string;
}

const MyComponent = ({
    children,
}: MyComponentProps) => {
    return (
        <div>{children}</div>
    );
};

function Marquee() {
    return (
        <MyComponent behavior="scroll" direction="left" scrollamount="10">
            <div className="marque_holder">
                <Image src="images/star.png" alt="" />
                <div className="heading_3">SEO</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">ADVERTISING</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">DIGITAL MARKETING</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">SOCIAL MEDIA</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">CONTENT MARKETING</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">EMAIL MARKETING</div>
                <Image src="images/star.png" alt="" />
                <div className="heading_3">WEB ANALYTICS</div>
            </div>
        </MyComponent>
    );
}

export default Marquee;
