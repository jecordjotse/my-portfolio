import Head from "next/head";
import React from "react";
import ContactBanner from "../components/contactComponents/contactBanner/contactBanner";
import ContactForm from "../components/contactComponents/contactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactBanner />
      <ContactForm />
    </>
  );
};

export default ContactPage;
