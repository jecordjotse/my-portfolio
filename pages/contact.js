import Head from "next/head";
import React from "react";
import ContactBanner from "../components/contactComponents/contactBanner/contactBanner";
import ContactForm from "../components/contactComponents/contactForm";

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact me</title>
				<meta name="title" content="Contact Jerome Cordjotse" />
				<meta
					name="description"
					content="Contact Jerome Cordjotse on to hire or collaborate with."
				/>
			</Head>
			<ContactBanner />
			<ContactForm />
		</>
	);
};

export default ContactPage;
