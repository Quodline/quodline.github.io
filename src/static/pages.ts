export const aboutPage: Page = { path: '/', title: 'About' };
export const projectsPage: Page = { path: '/projects', title: 'Projects' };
export const skillsPage: Page = { path: '/skills', title: 'Skills' };
export const contactPage: Page = { path: '/contact', title: 'Contact' };

aboutPage.next = projectsPage;
projectsPage.previous = aboutPage;
projectsPage.next = skillsPage;
skillsPage.previous = projectsPage;
skillsPage.next = contactPage;
contactPage.previous = skillsPage;

const pages: Page[] = [aboutPage, projectsPage, skillsPage, contactPage];

export default pages;
