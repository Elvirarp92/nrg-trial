describe("Navbar", () => {
  it('does not show staff routes to normal users', () => {
    cy.log('Logging in as normal user')
    cy.loginByForm(Cypress.env('USER'), Cypress.env('PW'))

    cy.get('nav[data-cy=link-bar]').should('be.visible')
    cy.get('a[data-cy=Deals]').should('exist')
    cy.get('a[data-cy=Users]').should('not.exist')
  })

  it('shows staff routes to staff users', () => {
    cy.log('Logging in as normal user')
    cy.loginByForm(Cypress.env('ADMIN_USER'), Cypress.env('ADMIN_PW'))

    cy.get('nav[data-cy=link-bar]').should('be.visible')
    cy.get('a[data-cy=Deals]').should('exist')
    cy.get('a[data-cy=Users]').should('exist')
  })

})