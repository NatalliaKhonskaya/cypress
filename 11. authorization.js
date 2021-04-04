/// <reference types="cypress" />


it('verify the user id', () => {

  cy.visit('/')

  /* log in and save cookie value */
    cy.request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdGFsbGlhLmtob25za2F5YUBlbWFpbC5jeiIsImlhdCI6MTYxNzU2MDI4OCwiZXhwIjoxNjE3NTYzODg4LCJzdWIiOiIxIn0.ciD1P9Z66IkEdmNEgmBGDs5qDL-3gDoa1RKMv8LsWHE', 
      }
    }).then(boards => {

     /* before using Lodash 
      console.log(Cypress._.find(boards.body, {name: 'private board'}) */
      
      /* create a variable */
      let privateBoard = Cypress._.find(boards.body, {name: 'the private board'})
      let publicBoard = Cypress._.find(boards.body, {name: 'public board'})
      
      /* make the assertions */ 
      expect(privateBoard.user).to.eq(1)
      expect(publicBoard.user).to.eq(0)
      expect(boards.body).to.have.length(2)

    })
  
  cy.request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
      }
    }).then(boards => {

      let publicBoard = Cypress._.find(boards.body, {name: 'public board'})

      expect(publicBoard.user).to.eq(0)
      expect(boards.body).to.have.length(1)
    })
  
});