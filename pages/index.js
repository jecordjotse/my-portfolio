import Head from "next/head";
import Image from "next/image";
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
    </>
  );
}
