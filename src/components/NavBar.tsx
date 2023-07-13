import { NavLink } from "@/components/NavLink";


export function NavBar() {
  return (
    <header className="fixed z-[1000] w-full tab:hidden">
      <nav className="flex h-[8vh] w-full items-center justify-center gap-8 bg-white-300 shadow-xl drop-shadow-lg">
        <div
          className={
            "flex w-full items-center justify-center gap-8 bg-white-300"
          }
        >
          <NavLink name="Início" href="inicio" />
          <NavLink name="Sobre mim" href="sobre-mim" />
          <NavLink name="Skills" href="skills" />
          <NavLink name="Projetos" href="projetos" />
          <NavLink name="Contato" href="contato" />
          
        </div>
      </nav>
    </header>
  );
}
