import Skill from '@/components/Skill'

interface Props {
    gridClassName?: string,
    title: string
    skills: Skill[]
}

export default function SkillsSection({gridClassName, title, skills}: Props) {
    return (
        <div>
            <h4 className="font-bold text-2xl">{title}</h4>
            <div className={`grid grid-cols-3 md:grid-cols-4 xl:grid-cols-9 ${gridClassName}`}>
                {skills.map(([name, icon]) => (
                    <Skill key={name} icon={icon} name={name}/>
                ))}
            </div>
        </div>
    )
}