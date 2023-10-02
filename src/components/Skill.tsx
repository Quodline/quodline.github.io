import Image from 'next/image'

interface Props {
    icon: string
    name: string
}

export default function Skill (props: Props) {
    return <figure className="skill">
        <div className="flex items-center">
            <Image className="logo-icon" src={props.icon} alt="icon"/>
        </div>
        <figcaption className="text-center flex-1">{props.name}</figcaption>
    </figure>
}