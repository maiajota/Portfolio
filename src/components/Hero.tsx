import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <main
      className="pattern flex min-h-screen justify-center pt-16"
      id="inicio"
    >
      <div className="mb-8 flex min-h-full w-[60%] flex-wrap items-center justify-center gap-8 tab:py-8">
        <div className="flex w-[40%] flex-1 flex-col gap-4">
          <h2 className="text-3xl">
            Oi, sou um{" "}
            <span className="whitespace-nowrap bg-blue-400 px-3 font-semibold text-white-300">
              Web Dev
            </span>
          </h2>
          <h1 className="text-6xl font-bold">João Victor Maia</h1>
          <p className="text-2xl text-white-700 ">
            Entrego sites completos em Javascript utilizando as mais atuais
            stacks para alavancar o seu projeto.
          </p>
          <Link
            className=" flex max-w-[230px] items-center justify-center gap-2 rounded-lg bg-red-300 p-2 text-2xl font-bold text-white-300 transition-colors hover:bg-red-400 hover:text-white-500"
            href={"https://www.linkedin.com/in/maiajota/"}
          >
            <Linkedin />
            FALE COMIGO
          </Link>
        </div>
        <div>
          <Image
            src={"/images/perfil.png"}
            width={300}
            height={300}
            alt="Meu perfil"
            className="rounded-full bg-blue-400"
          />
        </div>
      </div>
    </main>
  );
}
