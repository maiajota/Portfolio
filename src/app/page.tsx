import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { NavLink } from "@/components/NavLink";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <div className="flex gap-8 justify-center items-center bg-white-300 drop-shadow-lg h-12 fixed w-full">
        <NavLink name="Início" href="#inicio" />
        <NavLink name="Sobre Mim" href="#sobre-mim" />
        <NavLink name="Skills" href="#skills" />
        <NavLink name="Projetos" href="#projetos" />
      </div>
      <Hero />
      <AboutMe />
      <div className="pattern flex min-h-screen justify-center py-4">
        <div className="flex h-full w-[60%] flex-col items-center justify-center">
          <h2 className="mb-28 text-2xl font-bold text-blue-400 pt-12" id="skills">MINHAS SKILLS</h2>
          <div className="grid gap-4 grid-cols-2 mb-28">
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          </div>
        <h2 className="text-2xl font-bold text-white-400 bg-blue-400 px-4 py-2 rounded">PROJETOS</h2>
        </div>
      </div>
    </div>
  );
}
