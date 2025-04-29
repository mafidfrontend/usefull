import "../styles/animate.css";
import "../styles/bootstrap-grid.css";
import "../styles/odometer.css";
import "../styles/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
