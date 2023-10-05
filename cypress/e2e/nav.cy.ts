/* eslint-disable */

import pages from '../../src/data/pages'

describe('Navigation', () => {
    it('can navigate to the pages in nav links correctly', () => {
        cy.visit('/')

        pages.forEach(page => {
            cy.get(`.navbar-links a[href="${page.path}"]`).click()
            cy.url().should('include', page.path)
        })
    })
})