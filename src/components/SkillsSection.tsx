'use client'

import Skill from '@/components/Skill'
import {motion} from 'framer-motion'
import {cardListProps} from '@/framer/cards'
import _ from 'lodash'

interface Props {
    title: string
    skills: Skill[]
}

export default function SkillsSection({title, skills}: Props) {
    return (
        <div id={`skills-${_.kebabCase(title)}`}>
            <h2 className="font-bold text-2xl">{title}</h2>
            <motion.div className="skill-list" {...cardListProps}>
                {skills.map(([name, icon]) => (
                    <Skill key={name} icon={icon} name={name}/>
                ))}
            </motion.div>
        </div>
    )
}