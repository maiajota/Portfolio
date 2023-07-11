import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <div className="pattern flex min-h-screen justify-center py-4">
        <div className="flex h-full w-[60%] flex-col items-center justify-center">
          <h2
            className="mb-28 pt-12 text-2xl font-bold text-blue-400"
            id="skills"
          >
            MINHAS SKILLS
          </h2>
          <div className="mb-28 grid grid-cols-2 gap-4">
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          </div>
          <h2 className="rounded bg-blue-400 px-4 py-2 text-2xl font-bold text-white-400">
            PROJETOS
          </h2>
        </div>
      </div>
    </div>
  );
}
