import Image from 'next/image'
import Link from 'next/link'

type Props = {
    icon: string,
    name: string,
    subtext: string,
    href: string,
}

export default function SocialLink (props: Props) {
    return <Link href={props.href} target="_blank" className="handle">
        <div className="flex items-center">
            <Image className="logo-icon"
                   src={props.icon}
                   alt="icon"
                   placeholder="blur"/>
        </div>
        <div className="text-center font-bold">{props.name}</div>
        <div className="text-center text-gray-500 break-all">{props.subtext}</div>
    </Link>
}