export function NavLink(props: any){
    return(
        <div>
            <a href={`${props.href}`} className="font-semibold hover:border-b-2 hover:border-blue-400 transition-colors">{props.name}</a>
        </div>
    )
}