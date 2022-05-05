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
				<meta name="title" content="Who is Jerome Cordjotse ?" />
				<meta
					name="description"
					content="Learn more about Jerome. Find out who is."
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@Elorm_Jerome" />
				<meta name="twitter:title" content="Who is Elorm Jerome?" />
				<meta
					name="twitter:description"
					content="Learn more about Jerome and experience out who is."
				/>
				<meta
					name="twitter:image"
					content="https://jeromecordjotse.com/Jerome.jpg"
				/>
			</Head>
			<AboutBanner />
			<WhoIs />
			<ContactButton />
		</>
	);
};

export default AboutPage;
