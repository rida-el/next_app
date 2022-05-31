import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Faq from "../components/FAQ/Faq";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
	  <Faq />
    </div>
  );
}
