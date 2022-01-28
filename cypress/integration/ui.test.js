/// <reference types="cypress" /

describe('UI check', () => {
  it('ui', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });
  it('About', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get(':nth-child(2) > a').click();
  });
  it('Menu', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get('.app__navbar-links > :nth-child(3) > a').click();
  });
  it('Awards', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get(':nth-child(4) > a').click();
  });
  it('Contact', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get(':nth-child(5) > a').click();
  });
});
