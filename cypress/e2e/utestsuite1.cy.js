describe('empty spec', () => {
  it('Successfully login, then assert text on homepage', function () {
    cy.visit('https://univerusunitydev.b2clogin.com/univerusunitydev.onmicrosoft.com/b2c_1a_signup_signin_v2/oauth2/v2.0/authorize?client_id=fc514fd8-54b3-4fab-bdc8-ae7dcd8c6575&scope=openid%20offline_access%20profile&redirect_uri=https%3A%2F%2Funitydev.ca%2Faad_callback&client-request-id=e99252c2-a85a-4fb0-9135-67a1321ba8c5&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.18.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=kDHfBI2b_WNkInOyNBt1-9bMRCJJCSW8KVOK9a66nng&code_challenge_method=S256&nonce=8a8b4111-a424-4f6b-aa1f-e1ffbb94bf7e&state=eyJpZCI6ImQ0NDJkOWY0LTcxNjMtNDA1Zi04ZjUyLTA0MTQ4NGVjMmQ0MyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D')
    Cypress.Commands.add('typeLogin', (user) => {
      cy.get('#signInName').type(user.email)
    
      cy.get('#password').type(user.password)
    })

    cy.typeLogin({ email: 'devops-qa@univerus.com', password: 'eo2dCoJpxLkMR826' })

    cy.get('#next').click()
    
    cy.wait(5000);
    cy.visit('https://unitydev.ca/support/dashboard')
    cy.wait(5000);
    cy.get('.jss14').should('have.text', 'Unity Manage')
  })

  it('visit log-in page', function () {
    cy.visit('https://unitydev.ca/support/dashboard')
  })

  
})