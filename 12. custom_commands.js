/// <reference types="cypress" />


/* and then put this newly created command to the:
support folder - commands.js file 
in order to this command not only in one particular test, but everywhere */

/*first custom command - create a new task */
Cypress.Commands.add('AddNewTask', (name) => {
  
  cy.contains('Add a card')
    .click()

  cy.get('[data-id="newTaskTitle"]')
    .type(name + '{enter}')

})

/* second custom command - login */
Cypress.Commands.add('LoginUser', (email, password) => {

  cy.request({
    method: 'POST',
    url: '/login',
    body: {
     "email": email,
     "password": password
    }
   }).then( res => {
     cy.setCookie('trello_token', res.body.accessToken)
   })

})


beforeEach(() => {

  cy.request('DELETE', '/api/tasks')

})


it('create a new task with custom command', () => {

  cy.visit('/board/18285574639')

  /* using my own custom commands*/ 
    cy.AddNewTask('my command')

    cy.AddNewTask('my new command')

});


it('login with custom command', () => {

  /* using my own custom commands*/
  cy.LoginUser('natallia.khonskaya@email.cz', '123456789')

  cy.visit('/')

});






/* it's nice to declare my new custom command: 
1. create index.d.ts file in support folder
2. copy the code:

declare namespace Cypress {
  interface Chainable {
   
     // adds a new task to list 
    
    AddNewTask(name: string): Chainable<Element>
}  */