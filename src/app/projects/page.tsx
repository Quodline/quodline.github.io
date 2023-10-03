import './projects.css'

import projects from '@/data/projects'
import ProjectList from '@/components/ProjectList'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Ore Adeleye\'s portfolio',
    description: 'Ore Adeleye: portfolio. Oreoluwa Adeleye\'s best, recent works',
}

export default function Home() {
    return (
        <main>
            <h4 className="font-bold text-3xl">Featured projects</h4>
            <ProjectList projects={projects}/>
        </main>
    )
}