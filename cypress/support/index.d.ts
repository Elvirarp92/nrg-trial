declare namespace Cypress {
  interface Chainable {
    loginByForm(username: string, password: string): Chainable<JQuery<HTMLFormElement>>
  }
}