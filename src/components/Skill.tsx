export function Skill(props: any) {
  return (
    <img
      src={`${props.src}`}
      className="h-16 w-16 rounded-lg bg-blue-700 p-4 shadow-xl"
      data-aos={props.side}
      data-aos-duration={props.delay}
      data-aos-easing="ease-in"
    />
  );
}
