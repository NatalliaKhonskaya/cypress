/// <reference types="cypress" />

Cypress.Cookies.defaults({
  whitelist: 'trello_token'
})

it('cookies', () => {

  // cy.setCookie('trello_token', 'find this info in Console - Application - Cookies')

  cy
    .visit('/*')

    
})