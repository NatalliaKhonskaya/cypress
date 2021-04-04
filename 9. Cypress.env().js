/// <reference types="cypress" />

beforeEach( () => {

  /* reset our data before each test */
  cy.request('POST', '/api/reset')

  /* create a board with api-request */
    cy.request('POST', '/api/boards', {
      name: 'new board from the api-request'
    }).then( boards => {
      Cypress.env('board', boards.body )
    })

})

it('create a list in the board', () => {
  
  /* create a list with api-request */
  cy.request('POST', '/api/lists', {
    title: 'list from the api-request',
    boardId: Cypress.env('board')['id']
  })

  cy
    .visit('/board/' + Cypress.env('board')['id']);

})