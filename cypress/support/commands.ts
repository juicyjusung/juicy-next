/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>;
    getBySel(selector: string): Chainable<Element>;
    getBySelLike(selector: string): Chainable<Element>;
  }
}

Cypress.Commands.add('getBySel', (selector: string, ...args: any) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('getBySelLike', (selector: string, ...args: any) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});
