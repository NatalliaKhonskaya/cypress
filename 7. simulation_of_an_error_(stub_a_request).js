/// <reference types="cypress" />

beforeEach( () => {

  cy.server()

  /* simulating a response with 500-status code */
  cy.route({
    method: 'POST',
    url: '/api/boards',
    response: 'error',
    status: '500'
  })
    
  cy.visit('/*');

});


it('simulation of an error when creating a board', () => {

  /* error when creating a board */ 
  cy.get('.board_newItem')
    .click()

  cy.get('.board_addBoard')
    .type('Error_Error {enter}')

  /* verify the visibility of an error message */
    cy.get('#errorMessage')
    .should('be.visible')

})