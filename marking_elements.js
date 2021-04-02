/// <reference types="cypress" />

it('create a board', () => {

  cy.visit('localhost:3000');

  /* create a new board */

  cy.get('#new-board')
    .click()

  cy.get('.board_addBoard')
    .click()
    .type('Name board 1 {enter}')
});


it('create a task', () => {

  /* create a list and task in the board */

  cy.get('.CreateList_title')
    .click()
  cy.get('.CreateList_input')
    .type('new list {enter}')
  cy.get('.List_addTask')
    .click()
  cy.get('[data-id="newTaskTitle"]')
    .type('first thing to do {enter}')

});


it('mark a checkbox', () => {

  /* checkbox is checked */
  
  cy.get('.container > .checkmark')
  .check()

  /* go to the main page */
  
  cy.contains ('My Boards')
    .click()

});

