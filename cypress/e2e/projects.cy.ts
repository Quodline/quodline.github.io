/* eslint-disable */

import {aboutPage, projectsPage, skillsPage} from '@/data/pages'

beforeEach(() => {
    cy.visit(projectsPage.path)
})

describe('Links', () => {
    it('can link to skills', () => {
        cy.get('.bottom-link-right').click()

        cy.url().should('include', skillsPage.path)
    })

    it('can link to about', () => {
        cy.get('.bottom-link-left').click()

        cy.url().should('include', aboutPage.path)
    })
})

describe('Cards', () => {
    it('keeps the first card visible', () => {
        cy.get('.accordion-item-body').first().should('be.visible')
    })

    it('keeps the other cards hidden apart from the first', () => {
        cy.get('.accordion').find('.accordion-item:not(:first-child)').should('not.be.visible')
    })

    it('can expand a collapsed card and collapse the previously expanded one', () => {
        cy.get('.accordion-item-header').eq(1).click()

        cy.get('.accordion-item-body').eq(1).should('be.visible')
        cy.get('.accordion-item-body').first().should('not.be.visible')
    })
})