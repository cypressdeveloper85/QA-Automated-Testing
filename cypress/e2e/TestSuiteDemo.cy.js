describe('empty spec', () => {
  it('sign-up annd assert text/background brightness', () => {
    cy.visit('https://demo.heyplatypus.com/')
    Cypress.Commands.add('typeLogin', (user) => {
      cy.get('[data-testid="email-input"]').type(user.email)
    
      cy.get('[data-testid="password-input"]').type(user.password)
    })
    cy.typeLogin({ email: 'cypressdeveloper85@gmail.com', password: '1290EastNorth!' })
    cy.get('.MuiButton-label').click()
    cy.get('[data-testid="verify-email-successful-component"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.viewport('iphone-6')
    cy.get('[data-testid="verify-email-successful-component"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})