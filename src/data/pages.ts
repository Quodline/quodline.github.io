const portfolioPage: Page = {path: '/', title: 'Portfolio'}
const skillsPage: Page = {path: '/skills', title: 'Skills'}
const socialsPage: Page = {path: '/handles', title: 'Social handles'}
const aboutPage: Page = {path: '/about', title: 'About'}

portfolioPage.next = skillsPage
skillsPage.previous = portfolioPage
skillsPage.next = socialsPage
socialsPage.previous = skillsPage
socialsPage.next = aboutPage
aboutPage.previous = socialsPage

const pages = [ portfolioPage, skillsPage, socialsPage, aboutPage ]

export default pages
