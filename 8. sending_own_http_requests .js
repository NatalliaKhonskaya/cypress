/// <reference types="cypress" />

beforeEach( () => {

  /* reset our data before each test with the help of http-request */ 
    cy.request('POST', '/api/reset')
})

it('create a board', () => {

  cy
    .visit('/*')

  /* create a new board */

cy.get('#new-board')
.click()

cy.get('.board_addBoard')
.click()
.type('Board after Reset {enter}')

/* create a list and tasks in it */

cy.get('.CreateList_title')
.click()
cy.get('.CreateList_input')
.type('list number three {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('new info {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('newer info {enter}')


})