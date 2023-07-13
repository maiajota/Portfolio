import * as Scroll from "react-scroll";

let Link = Scroll.Link;

export function NavLink(props: any) {
  return (
    <Link
      to={props.href}
      className="cursor-pointer border-blue-400 font-semibold hover:border-b-2"
    >
      {props.name}
    </Link>
  );
}
