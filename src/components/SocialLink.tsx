import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {cardProps} from '@/framer/cards'

type Props = {
    icon: string,
    name: string,
    subtext: string,
    href: string,
}

export default function SocialLink (props: Props) {
    return (
        <motion.div className="handle" {...cardProps}>
            <Link href={props.href} target="_blank">
                <div className="flex justify-center items-center">
                    <Image className="logo-icon" src={props.icon} alt="icon"/>
                </div>
                <div className="text-center font-bold">{props.name}</div>
                <div className="text-center text-gray-500 break-all">{props.subtext}</div>
            </Link>
        </motion.div>
    )
}