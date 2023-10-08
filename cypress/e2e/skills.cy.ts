import {contactPage, projectsPage, skillsPage} from '@/data/pages'

beforeEach(() => {
    cy.visit(skillsPage.path)
})

describe('Links', () => {
    it('can link to contact', () => {
        cy.get('.bottom-link-right').click()

        cy.url().should('include', contactPage.path)
    })

    it.only('can link to projects', () => {
        cy.get('.bottom-link-left').click()

        cy.url().should('include', projectsPage.path)
    })
})

describe('Skill lists', () => {
    it('displays all the frontend skills', () => {
        cy.get('#skills-frontend > .skill-list').children()
            .should('have.length', 12)
    })

    it('displays all the backend skills', () => {
        cy.get('#skills-backend > .skill-list').children()
            .should('have.length', 8)
    })

    it('displays all the deployment environments', () => {
        cy.get('#skills-cloud-deployment > .skill-list').children()
            .should('have.length', 8)
    })
})