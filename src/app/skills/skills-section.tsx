'use client';

import { motion } from 'framer-motion';
import SkillCard from './skill-card';
import { cardListProps } from '@/framer/cards';

interface Props {
  title: string;
  skills: Skill[];
}

export default function SkillsSection({ title, skills }: Props) {
  return (
    <div id={`skills-${title.toLowerCase()}`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <motion.div className='skill-list' {...cardListProps}>
        {skills.map(([name, icon]) => (
          <SkillCard key={name} icon={icon} name={name} />
        ))}
      </motion.div>
    </div>
  );
}
