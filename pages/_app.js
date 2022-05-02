import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/globals.css";
import "@fontsource/dosis";

function MyApp({ Component, pageProps }) {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />
      <Component {...pageProps} style={{ minHeight: "900px" }} />
      <Footer year={year} />
    </>
  );
}

export default MyApp;
