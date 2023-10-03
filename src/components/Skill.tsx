import Image from 'next/image'
import {motion} from 'framer-motion'
import {cardProps} from '@/framer/cards'

interface Props {
    icon: string
    name: string
}

export default function Skill(props: Props) {
    return (
        <motion.figure className="skill" {...cardProps}>
            <div className="flex justify-center items-center">
                <Image className="logo-icon" src={props.icon} alt="icon"/>
            </div>
            <figcaption className="text-center flex-1">{props.name}</figcaption>
        </motion.figure>
    )
}