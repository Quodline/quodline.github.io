/* eslint-disable */

const path = require('path')

import {aboutPage, projectsPage} from '../../src/data/pages'

beforeEach(() => {
    cy.visit(aboutPage.path)
})

describe('About page', () => {
    it('can download resume', () => {
        const downloadsFolder = Cypress.config("downloadsFolder")
        cy.get('#resume-download-btn').click()

        cy.readFile(path.join(downloadsFolder, "ore-adeleye-resume-2023.pdf"))
    })

    it('can link to projects', () => {
        cy.get('.bottom-link-right').click()

        cy.url().should('include', projectsPage.path)
    })
})