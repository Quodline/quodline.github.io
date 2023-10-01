'use client'

import {useState} from 'react'
import ProjectCard from '@/components/ProjectCard'

interface Props {
    projects: PortfolioProject[]
}

export default function ProjectList({projects}: Props) {
    const [activeIdx, setActiveIdx] = useState(0)

    return <article>
        {projects.map((project, idx) =>
            <ProjectCard key={project.id}
                         project={project}
                         isCollapsed={idx !== activeIdx}
                         onExpand={() => setActiveIdx(idx)}/>
        )}
    </article>
}