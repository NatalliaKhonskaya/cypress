/// <reference types="cypress" />

it('find elements on the page', () => {

  cy.visit('localhost:3000');

  /* create a first new board */

  cy.get('#new-board')
    .click()

  cy.get('.board_addBoard')
    .click()
    .type('Name board 1 {enter}')

  /* back to the main page */

    cy.contains('My Boards')
    .click()

  /* create a second new board */

    cy.get('#new-board')
    .click()
  
    cy.get('.board_addBoard')
    .click()
    .type('Name board 2 {enter}')

    /* back to the main page */

    cy.contains('My Boards')
    .click()

})
  

