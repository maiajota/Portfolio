"use client";

import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [navBarOpened, setNavBarOpened] = useState(false);

  function handleNavBar() {
    setNavBarOpened((navBarOpened) => !navBarOpened);
  }

  let isNavBarOpened = navBarOpened
    ? "tab:translate-x-[0%]"
    : "tab:translate-x-[100%]";

  return (
    <div className="fixed w-full">
      <nav className="flex h-[8vh] w-full items-center justify-center gap-8 bg-white-300 drop-shadow-lg">
        <Menu size={32} className="hidden tab:block" onClick={handleNavBar} />
        <div className={`flex w-full items-center justify-center gap-8 bg-white-300 tab:absolute tab:top-[8vh] tab:h-[32vh] tab:flex-col ${isNavBarOpened}`}>
          <NavLink name="Início" href="#inicio" />
          <NavLink name="Sobre Mim" href="#sobre-mim" />
          <NavLink name="Skills" href="#skills" />
          <NavLink name="Projetos" href="#projetos" />
          <NavLink name="Contato" href="#contato" />
        </div>
      </nav>
    </div>
  );
}
