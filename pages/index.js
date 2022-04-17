import Head from "next/head";
import ContactForm from "../components/contactComponents/contactForm";
import HomeBanner from "../components/homeComponents/homeBanner";
import HomeProjects from "../components/homeComponents/homeProjects";
import HomeSkills from "../components/homeComponents/homeSkills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeSkills />
      <HomeProjects />
      <ContactForm />
    </>
  );
}
