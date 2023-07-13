import { Skill } from "./Skill";

export function SkillSection() {
  return (
    <section>
      <div className="mb-28 grid grid-cols-2 gap-4">
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          side="fade-right"
          delay="400"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          side="fade-left"
          delay="400"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          side="fade-right"
          delay="500"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          side="fade-left"
          delay="500"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          side="fade-right"
          delay="600"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          side="fade-left"
          delay="600"
        />
      </div>
    </section>
  );
}
