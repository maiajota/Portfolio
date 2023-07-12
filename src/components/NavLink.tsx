export function NavLink(props: any) {
  return (
    <a
      href={`${props.href}`}
      className="font-semibold transition-colors hover:border-b-2 hover:border-blue-400"
    >
      {props.name}
    </a>
  );
}
