"use client";


import { useEffect } from "react";
import { AboutMeSection } from "@/components/AboutMeSection";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavBarMobile } from "@/components/NavBarMobile";
import { SkillSection } from "@/components/SkillSection";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <NavBar />
      <NavBarMobile />
      <Hero />
      <AboutMeSection />
      <div className="pattern flex min-h-screen justify-center py-4">
        <div className="flex h-full w-[60%] flex-col items-center justify-center">
          <h2
            className="mb-28 pt-12 text-2xl font-bold text-blue-400"
            id="skills"
          >
            MINHAS SKILLS
          </h2>
          <SkillSection />
          <h2 className="rounded bg-blue-400 px-4 py-2 text-2xl font-bold text-white-400">
            PROJETOS
          </h2>
        </div>
      </div>
    </div>
  );
}
