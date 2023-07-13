"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLinkMobile } from "./NavLinkMobile";

export function NavBarMobile() {
  const [navBarOpened, setNavBarOpened] = useState(false);

  function handleNavBar() {
    setNavBarOpened((navBarOpened) => !navBarOpened);
  }

  let isNavBarOpen = navBarOpened ? true : false;

  const item = {
    exit: {
      translateX: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className="fixed z-[1000] hidden w-full tab:block">
      <nav className="flex h-[8vh] w-full items-center justify-end gap-8 bg-white-300 drop-shadow-lg">
        <Menu size={32} className="mr-5" onClick={handleNavBar} />
        <AnimatePresence>
          {isNavBarOpen && (
            <motion.div
              className={`absolute top-[7vh] flex h-[45vh] w-full flex-col items-center justify-center gap-8 bg-white-300 pb-4 transition-all`}
              variants={item}
              initial={{ opacity: 0, translateX: "100%" }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              exit="exit"
            >
              <NavLinkMobile time="0.7" name="Início" href="inicio" />
              <NavLinkMobile time="0.8" name="Sobre Mim" href="sobre-mim" />
              <NavLinkMobile time="0.9" name="Skills" href="skills" />
              <NavLinkMobile time="1" name="Projeto" href="projeto" />
              <NavLinkMobile time="1.1" name="Contato"href="#contato" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
