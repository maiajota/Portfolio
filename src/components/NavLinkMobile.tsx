import { motion } from "framer-motion";

export function NavLinkMobile(props: any) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.time }}
      exit={{
        opacity: 0,
        transition: { ease: "easeInOut", delay: 0.1 },
      }}
      href={props.link}
      className="navlink font-semibold transition-colors hover:border-b-2 hover:border-blue-400"
    >
      {props.name}
    </motion.a>
  );
}
