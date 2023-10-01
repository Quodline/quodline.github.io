import './skills.css';
import skills from '@/data/skills'
import SkillsSection from '@/components/SkillsSection'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Ore Adeleye\'s skill set',
    description: 'Ore Adeleye: skill set, programming languages, tools.',
}

export default function Skills() {
    return (
        <main className="flex flex-col space-y-8 bg-gray-200">
            <SkillsSection title="Frontend" skills={skills.frontend}/>
            <SkillsSection title="Backend" skills={skills.backend}/>
            <SkillsSection
                title="Cloud & Deployment"
                skills={skills.deployment}
                gridClassName="xl:!grid-cols-8"
            />
        </main>
    )
}