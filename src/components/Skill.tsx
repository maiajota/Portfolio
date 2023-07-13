export function Skill(props: any) {
  return (
    <img
      src={`${props.src}`}
      className="h-16 w-16 rounded-lg bg-blue-700 p-4 hover:scale-110 transition-all shadow-xl" 
    />
  );
}
