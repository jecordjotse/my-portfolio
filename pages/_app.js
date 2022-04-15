import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/globals.css";
import "@fontsource/dosis";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
