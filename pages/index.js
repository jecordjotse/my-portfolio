import Head from "next/head";
import ContactForm from "../components/contactComponents/contactForm";
import HomeBanner from "../components/homeComponents/homeBanner";
import HomeProjects from "../components/homeComponents/homeProjects";
import HomeSkills from "../components/homeComponents/homeSkills";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Software Developer - Jerome Elorm Cordjotse</title>
				<meta
					name="title"
					content="Jerome Cordjotse - Software Developer"
				/>
				<meta
					name="description"
					content="Jerome Cordjotse, a software developer and electrical engineer, is a co-founder of a prop-tech, edanra.com. He develops in React NodeJS and PHP."
				/>
				<meta
					name="keywords"
					content="React Developer, Software Developer, NodeJS Developer, Fullstack Developer, Electrical Engineer. Data Science, Engineers in Ghana, Electrical Circuit DesignerPLC programmer, ML/AI, Project Management, Product Management, Ghana"
				/>
				<meta name="robots" content="index, follow" />
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta name="language" content="English" />
				<meta name="revisit-after" content="30 days" />
				<meta name="author" content="Jerome Elorm Cordjotse" />
			</Head>
			<HomeBanner />
			<HomeSkills />
			<a id="projects" />
			<HomeProjects />
			<ContactForm />
		</>
	);
}
