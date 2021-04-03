/// <reference types="cypress" />

beforeEach( () => {

  cy.server()

  /* POST-request for creating task */
  cy.route('POST', '/api/tasks')
    .as('TaskResponse')
  
  /* PATCH-request for checkinfg task */
    cy.route('PATCH', '/api/tasks/*')
      .as('CheckTask')
  
  /* DELETE-request for deleting list */ 
    cy.route('DELETE', '/api/lists/*')
    .as('DeleteListResponse')

  
  cy
    .visit('/board/20881580645'); 

});

it('create a task in a board', () => {

/* create a new task in specific board */

cy.get('.List_addTask')
  .click()
cy.get('[data-id="newTaskTitle"]')
   .type('and then repeat one more time{enter}')

/* testing the response */

cy.wait('@TaskResponse').then (task => {
  expect(task.status).to.eq(201)
  expect(task.response.body.title).to.eq('and then repeat one more time')
  expect(task.response.body.completed).to.be.false
})

})

it('check the task and test the response', () => {

/* check a specific task */
cy.contains('and then repeat one more time')
  .parent()
  .find('input')
  .check() 
  
/* test a response */
cy.wait('@CheckTask').then(check_action => {
  expect(check_action.status).to.eq(200)
  expect(check_action.response.body.completed).to.be.true
  expect(check_action.response.body.title).to.eq('and then repeat one more time')
  expect(check_action.request.body.completed).to.be.true
})
})


it('delete a task and testing the response', () => {

/* delete a list */

cy.get('.List .dropdown')
  .click()

cy.contains('Delete list')
  .click()

cy.wait('@DeleteListResponse').then(delete_action => {
  expect(delete_action.status).to.eq(200)
})
})

