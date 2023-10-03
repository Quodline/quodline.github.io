/* eslint-disable */

// Cypress E2E Test
describe('Navigation', () => {
  it('can navigate to the project page from nav link', () => {
    cy.visit('/')
    cy.get('.navbar-links a[href*="projects"]').click()
    cy.url().should('include', '/projects')
    cy.get('h1').contains('projects')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
