import Anchor from '@/components/Anchor'
import cn from 'classnames'
import ProjectCardSegment from '@/components/ProjectCardSegment'

interface Props {
    project: PortfolioProject
    onExpand: Function
    isCollapsed?: boolean
}

export default function ProjectCard({project, isCollapsed, onExpand}: Props) {
    return <section className="accordion-item">
        <div onClick={() => onExpand()} className="accordion-item-header">
            <h2 className="text-xl">{project.title}</h2>
            <Anchor href={project.link} isExternal>Visit</Anchor>
        </div>
        <div
            className={cn('accordion-item-body', {'is-collapsed': isCollapsed})}>
            <div>{project.description}</div>
            <ProjectCardSegment title="Frameworks">
                {project.techStack.frameworks.map(([framework, version]) =>
                    <div className="mr-5" key={framework}>
                        <div>{framework}</div>
                        <div className="text-gray-400">v{version}</div>
                    </div>
                )}
            </ProjectCardSegment>
            <ProjectCardSegment title="Languages">
                {project.techStack.languages.map(language =>(
                    <div className="mr-5" key={language}>{language}</div>
                ))}
            </ProjectCardSegment>
            <ProjectCardSegment title="Others">
                {project.techStack.others.map(tool => (
                    <div className="mr-5" key={tool}>{tool}</div>
                ))}
            </ProjectCardSegment>
            <div>
                <Anchor href={project.github} isExternal className="font-medium">GitHub</Anchor>
            </div>
        </div>
    </section>
}