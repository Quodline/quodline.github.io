type PropType = {
    icon: string,
    name: string,
    subtext: string,
    href: string,
}

export default function Skill (props: PropType) {
    return <a href={props.href} target="_blank" className="flex-1 lg:flex-none flex flex-col items-center bg-gray-100 rounded-md p-4 mr-4 mt-4">
        <div className="flex-1 flex items-center">
            <img className="w-16 lg:w-20" src={props.icon} alt="icon"/>
        </div>
        <div className="text-center font-bold">{props.name}</div>
        <div className="text-center text-gray-500">{props.subtext}</div>
    </a>;
}
