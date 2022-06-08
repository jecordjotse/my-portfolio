import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/globals.css";
import "@fontsource/dosis";
import ErrorBoundary from "../components/errorBoundary";

function MyApp({ Component, pageProps }) {
	const year = new Date().getFullYear();
	return (
		<>
			<Header />
			<ErrorBoundary>
				<Component {...pageProps} style={{ minHeight: "900px" }} />
			</ErrorBoundary>
			<Footer year={year} />
		</>
	);
}

export default MyApp;
