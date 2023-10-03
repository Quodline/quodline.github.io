'use client'

import Skill from '@/components/Skill'
import { motion } from 'framer-motion'
import {cardListProps} from '@/framer/cards'

interface Props {
    gridClassName?: string,
    title: string
    skills: Skill[]
}

export default function SkillsSection({gridClassName, title, skills}: Props) {
    return (
        <div>
            <h4 className="font-bold text-2xl">{title}</h4>
            <motion.div className={`skill-list ${gridClassName}`} {...cardListProps}>
                {skills.map(([name, icon]) => (
                    <Skill key={name} icon={icon} name={name}/>
                ))}
            </motion.div>
        </div>
    )
}