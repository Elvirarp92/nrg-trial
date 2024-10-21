describe("Login page", () => {
  beforeEach(() => {
    cy.log('Going to root')
    cy.visit('/')
  })
  it('is a sanity check', () => {
    cy.get('body').should('be.visible').should('have.class', '__next-auth-theme-auto')
  })

  it('displays an error if login fails', () => {
    cy.loginByForm('foo', 'bar')

    cy.get('.error').should('be.visible').should('contain', 'Sign in failed. Check the details you provided are correct.')
    cy.url().should('include', 'api/auth/signin')
  })

  it('logs in with the proper credentials', () => {
    cy.loginByForm(Cypress.env('USER'), Cypress.env('PW'))

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
    cy.getCookie('next-auth.csrf-token').should('exist')
    cy.getCookie('next-auth.session-token').should('exist')
  })
})