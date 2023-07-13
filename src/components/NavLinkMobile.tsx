import { motion } from "framer-motion";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;
export function NavLinkMobile(props: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.time }}
      exit={{
        opacity: 0,
        transition: { ease: "easeInOut", delay: 0.1 },
      }}
    >
      <Link
        to={props.href}
        className="cursor-pointer font-semibold transition-colors hover:border-b-2 hover:border-blue-400"
      >
        {props.name}
      </Link>
    </motion.div>
  );
}
