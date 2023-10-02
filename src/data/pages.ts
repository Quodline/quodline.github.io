const aboutPage: Page = {path: '/', title: 'About'}
const portfolioPage: Page = {path: '/portfolio', title: 'Portfolio'}
const skillsPage: Page = {path: '/skills', title: 'Skills'}
const socialsPage: Page = {path: '/handles', title: 'Social handles'}

aboutPage.next = portfolioPage
portfolioPage.previous = aboutPage
portfolioPage.next = skillsPage
skillsPage.previous = portfolioPage
skillsPage.next = socialsPage
socialsPage.previous = skillsPage

const pages: Page[] = [ aboutPage, portfolioPage, skillsPage, socialsPage ]

export default pages