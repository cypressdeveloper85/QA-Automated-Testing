describe('My First Cypress Test', { tags: '@fastt'}, function() {
  it('ice', function() {
    //Visit the Demo QA Website
    cy.visit('https://platypus-admin-ui-staging.herokuapp.com/sign-in')    
    
    Cypress.Commands.add('typeLogin', (user) => {
      cy.get('[data-testid="email-input"]').type(user.email)
    
      cy.get('[data-testid="password-input"]').type(user.password)
    })

    cy.typeLogin({ email: 'control-admin@staging.com', password: 'ms222EEE3@yopmail.com' })

    cy.get('[data-testid="sign-in-button"]').click()

    cy.get('[data-testid="userApprovalTitle"]').should('have.text', 'All Customers')
})
})