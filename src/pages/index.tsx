import About from "./components/About";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Rating from "./components/Rating";

export default function Home() {
    return (
        <>
            <Navbar />
            <Intro />
            <About />
            <Brands />
            <Portfolio />
            <Rating />
            <Footer />
        </>
    );
}