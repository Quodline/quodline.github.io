/* eslint-disable */

import { contactPage, skillsPage } from '@/static/pages';

beforeEach(() => {
  cy.visit(contactPage.path);
});

describe('Links', () => {
  it('can link to skills', () => {
    cy.get('.bottom-link-left').click();

    cy.url().should('include', skillsPage.path);
  });
});
