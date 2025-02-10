import { Space_Grotesk } from "next/font/google";

import { Helmet } from "@/components";
import Hero from "@/features/Home/fragments/Hero";
import AboutMe from "@/features/Home/fragments/AboutMe";
import Skills from "@/features/Home/fragments/Skills";
import Projects from "@/features/Home/fragments/Projects";
import Experience from "@/features/Home/fragments/Experience";
import Separator from "@/features/Home/components/Separator";
import Navigation from "@/features/Home/fragments/Navigation";

import "@/styles/Home/Home.module.css";
import Collaboration from "@/features/Home/fragments/Collaboration";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${spaceGrotesk.className}`}>
      <Helmet preset="home" />

      <Navigation />

      <Hero />
      <AboutMe />
      <Skills />
      <Separator />
      <Projects />
      <Experience />
      <Collaboration />
    </main>
  );
}
