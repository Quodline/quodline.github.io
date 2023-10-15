'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';
import { list } from '@/framer/projects';

interface Props {
  projects: PortfolioProject[];
}

export default function ProjectList({ projects }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <motion.article
      className="accordion"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.id}
          project={project}
          isCollapsed={idx !== activeIdx}
          onExpand={() => setActiveIdx(idx)}
        />
      ))}
    </motion.article>
  );
}
