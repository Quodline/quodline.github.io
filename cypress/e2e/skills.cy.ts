/* eslint-disable */

import { contactPage, projectsPage, skillsPage } from '@/static/pages';

beforeEach(() => {
  cy.visit(skillsPage.path);
});

describe('Links', () => {
  it('can link to contact', () => {
    cy.get('.bottom-link-right').click();

    cy.url().should('include', contactPage.path);
  });

  it('can link to projects', () => {
    cy.visit(skillsPage.path);
    cy.get('.bottom-link-left').click();

    cy.url().should('include', projectsPage.path);
  });
});

describe('Skill lists', () => {
  it('displays all the languages skills', () => {
    cy.get('#skills-languages > .skill-list')
      .children()
      .should('have.length', 7);
  });

  it('displays all the frontend skills', () => {
    cy.get('#skills-frontend > .skill-list')
      .children()
      .should('have.length', 8);
  });

  it('displays all the backend skills', () => {
    cy.get('#skills-backend > .skill-list').children().should('have.length', 8);
  });

  it('displays all the database skills', () => {
    cy.get('#skills-database > .skill-list')
      .children()
      .should('have.length', 4);
  });
});
