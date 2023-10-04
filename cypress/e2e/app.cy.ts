/* eslint-disable */

import pages, {aboutPage, projectsPage} from '../../src/data/pages'

const path = require('path')

describe('Navigation', () => {
    it('can navigate to the pages in nav links correctly', () => {
        cy.visit('/')

        pages.forEach(page => {
            cy.get(`.navbar-links a[href="${page.path}"]`).click()
            cy.url().should('include', page.path)
        })
    })
})

describe('About page', () => {
    it('can download resume', () => {
        const downloadsFolder = Cypress.config("downloadsFolder")

        cy.visit(aboutPage.path)
        cy.get('#resume-download-btn').click()

        cy.readFile(path.join(downloadsFolder, "ore-adeleye-resume-2023.pdf"))
    })

    it('can link to projects', () => {
        cy.visit(aboutPage.path)
        cy.get('.bottom-link-right').click()

        cy.url().should('include', projectsPage.path)
    })
})

// Prevent TypeScript from reading file as legacy script
export {}
