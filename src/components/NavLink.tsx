import * as Scroll from "react-scroll";

let Link = Scroll.Link;

export function NavLink(props: any) {
  return (
    <Link
      to={props.href}
      className="cursor-pointer font-semibold transition-colors hover:border-b-2 hover:border-blue-400"
    >
      {props.name}
    </Link>
  );
}
