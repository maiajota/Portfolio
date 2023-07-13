import { Lightbulb, ClipboardEdit } from "lucide-react";
import "aos/dist/aos.css";

export function AboutMeSection() {
  return (
    <section
      className="flex min-h-[80vh] justify-center bg-blue-400 py-12 text-white-300"
      id="sobre-mim"
    >
      <div className="grid h-full w-[60%] grid-cols-4 items-center justify-items-center gap-24 tab:w-[80%] tab:grid-cols-2 tab:grid-rows-[100px_repeat(3,_1fr)] tab:gap-0">
        <h1 className="col-start-1 col-end-3 justify-self-start text-2xl font-bold tab:col-start-1 tab:row-start-1">
          SOBRE MIM
        </h1>
        <h2
          className="col-start-1 col-end-3 text-3xl tab:col-start-1 tab:row-start-3"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <span className="text-red-400">“</span>O homem não teria alcançado o
          possível se, repetidas vezes, não tivesse tentado o impossível.
          <span className="text-red-400">”</span>{" "}
          <span className="text-lg text-red-400"> - Max Weber</span>
        </h2>
        <Lightbulb
          size={48}
          className="rounded-full bg-red-400 p-4 tab:col-start-1 tab:row-start-2"
        />
        <ClipboardEdit
          size={48}
          className="col-start-1 row-start-3 rounded-full bg-red-400 p-4 tab:col-start-1 tab:row-start-4"
        />
        <p
          className="col-start-2 col-end-5 row-start-3 text-2xl tab:col-start-1 tab:row-start-5"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          Atualmente estou cursando Ciência da Computação, tenho foco no
          Front-End e estou aprofundando meus conhecimentos em NextJS. Falo
          inglês avançado, gosto muito de prestar atenção nos detalhes e não
          poupo esforços pro clean code e acessibilidade. Estou sempre em busca
          de aprender as mais novas tecnologias do mercado para sempre trazer o
          melhor desempenho nos projetos a mim designados.
        </p>
      </div>
    </section>
  );
}
