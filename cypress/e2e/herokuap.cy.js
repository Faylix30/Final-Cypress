const testDataLogin = require("../fixtures/loginherokuap.json")
import loginPage from "../support/loginherokuap"

describe('login app commands', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('h2').should('have.text', 'Login Page')
  })

  it('Tc-01-correct & logout', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.url().should('include', 'https://the-internet.herokuapp.com/secure')
    cy.contains('You logged into a secure area!').should('be.visible')
    cy.contains('Secure Area').should('be.visible')
    cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
    cy.get('.button').click()
    cy.contains('You logged out of the secure area!').should('be.visible')
  })

  it('Tc-02-error user', () => {
    cy.login('incorrectUsername', 'SuperSecretPassword!')
    cy.contains('Your username is invalid!').should('be.visible')
  })

  it('Tc-03-error password', () => {
    cy.login('tomsmith', 'incorrectPassword')
    cy.contains('Your password is invalid!').should('be.visible')
  })

})

describe('login app manual', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('h2').should('have.text', 'Login Page')
  })

  it('Tc-01-correct & logout', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.contains('You logged into a secure area!').should('be.visible')
    cy.contains('Secure Area').should('be.visible')
    cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
    cy.get('.button').click()
    cy.contains('You logged out of the secure area!').should('be.visible')
  })

  it('Tc-02-error user', () => {
    cy.get('#username').type('incorrectUser'.repeat(2))
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })

  it('Tc-03-error password', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('incorrectPassword')
    cy.get('.radius').click()
    cy.contains('Your password is invalid!').should('be.visible')
  })

})

describe('login app json', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('h2').should('have.text', 'Login Page')
  })

  it('Tc-01-correct & logout', () => {
      cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
      loginPage.verifyLoginSucessText()
  })

  it('Tc-02-error user', () => {
      cy.login(testDataLogin.username.negative, testDataLogin.password.negative)
      loginPage.verifyLoginErrorUsername()
  })

  it('Tc-03-error password', () => {
      cy.login('tomsmith', 'incorrectPassword')
      loginPage.verifyLoginErrorPassword()
  })

})