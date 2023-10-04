import './projects.css'

import projects from '@/data/projects'
import ProjectList from '@/components/ProjectList'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Ore Adeleye\'s projects',
    description: 'Ore Adeleye: portfolio. Oreoluwa Adeleye\'s best, recent works and selected projects',
}

export default function Home() {
    return (
        <main>
            <h1 className="font-bold text-3xl">Featured projects</h1>
            <ProjectList projects={projects}/>
        </main>
    )
}