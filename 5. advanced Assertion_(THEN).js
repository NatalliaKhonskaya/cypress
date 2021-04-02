/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/'); 

});

it('create a board and tasks in it', () => {

/* create a new board */

cy.get('#new-board')
.click()

cy.get('.board_addBoard')
.click()
.type('Board for trying .Then {enter}')

/* create a list and tasks in it */

cy.get('.CreateList_title')
.click()
cy.get('.CreateList_input')
.type('list number two {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('learn {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('relax {enter}')
cy.get('.List_addTask')
.click()
cy.get('[data-id="newTaskTitle"]')
.type('repeat {enter}')

})


it('using Then', () => {

  /* visit the specific board */
  cy.visit('http://localhost:3000/board/82854997848')

  
  /* verify the text of our tasks */
  cy.get('.Task').then(activities => {
    expect(activities[0]).to.contain.text('learn')
    expect(activities[1]).to.contain.text('relax')
    expect(activities[2]).to.contain.text('repeat')

   /* we want to check the task with the name "learn" */

    cy.contains('learn')
      .parent()
      .find('input')
      .check()

    /* we want to verify whether the task with the name "learn" is checked 
    and the tasks with the names "relax" and "repeat" are not checked */
    
    cy.get('.Task input').then(checkboxes =>{
      expect(checkboxes[0]).to.be.checked
      expect(checkboxes[1]).not.to.be.checked
      expect(checkboxes[2]).not.to.be.checked
    })
   
    /* we want to verify whether the task with the name "learn" has label = completed
    and the tasks with the names "relax" and "repeat" don't have label = completed  */
     
    cy.get('.Task label').then(checkboxes_labels => {
        expect(checkboxes_labels[0]).to.have.class('completed')
        expect(checkboxes_labels[1]).to.not.have.class('completed')
        expect(checkboxes_labels[2]).to.not.have.class('completed')
      })



  })

})
