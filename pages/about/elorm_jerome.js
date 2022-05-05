import Head from "next/head";
import React from "react";
import AboutBanner from "../../components/aboutComponents/aboutBanner";
import ContactButton from "../../components/aboutComponents/aboutContactButton";
import WhoIs from "../../components/aboutComponents/aboutWhoIsElormJerome";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Who is Elorm Jerome?</title>
      </Head>
      <AboutBanner />
      <WhoIs />
      <ContactButton />
    </>
  );
};

export default AboutPage;
