export {}

declare global {
    interface Page {
        path: string
        title: string
        previous?: Page
        next?: Page
    }

    interface PortfolioProject {
        id: string
        title: string
        description: string
        github: string
        link: string
        techStack: {
            languages: string[]
            frameworks: string[][]
            others: string[]
        }
    }

    type Skill = [
        name: string,
        icon: string,
    ]

    interface SocialHandle {
        name: string
        subtext: string
        icon: string
        href: string
    }
}