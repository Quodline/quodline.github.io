import './portfolio.css'

import projects from '@/data/projects'
import ProjectList from '@/components/ProjectList'

export default function Home() {
    return (
        <main>
            <h4 className="font-bold text-3xl">Projects</h4>
            <ProjectList projects={projects}/>
        </main>
    )
}