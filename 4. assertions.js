/// <reference types="cypress" />

before( () => {

  cy
    .visit('/'); 

})

it('create a list', () => {

/* create a new board */

cy.get('#new-board')
.click()

cy.get('.board_addBoard')
.click()
.type('Board with assertions {enter}')

/* create a list and tasks in it */

cy.get('.CreateList_title')
.click()
cy.get('.CreateList_input')
.type('list number one {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('good {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('better {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('the best {enter}')

})

it('assertion of visibility and quantity', () => {

/* visit the specific list with tasks to start assertions */  
cy.visit('http://localhost:3000/board/29817760166')

/*assertion that we have 1 list */
cy.get('.List')
  .should('have.length', 1)

/*assertion that we have 3 tasks in our list */
cy.get('.Task')
   .should('have.length', 3)

/*assertion that our 3 tasks are visible */
cy.get('.Task')
  .should('be.visible')  

})


it('task is checked', () => {

/* visit the specific list with tasks to start assertions */  
cy.visit('http://localhost:3000/board/29817760166')
  
/* we want to check the task with the name "better" */

cy.contains('better')
   .parent()
   .find('input')
   .check()
   
/* we want to verify whether the task with the name "better" is checked */
cy.get('.Task label')
   .eq(1)
   .should('have.class', 'completed')

/* we want to verify that tasks "good" and "the best" are not checked */
   cy.get('.Task label')
   .eq(0)
   .should('not.be.checked')

   cy.get('.Task label')
   .eq(2)
   .should('not.be.checked')

})

it('name of the board', () => {

  /* visit the specific list with tasks to start assertions */  
cy.visit('http://localhost:3000/board/29817760166')
  
  /* we want to verify that the name of our board is exactly as we named it */
cy.get('.boardDetail_title')
  .should('have.value', 'Board with assertions')
})

