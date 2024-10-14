class loginPage {
    get loginSucessText() {
        return cy.get('.post-title')
    }
    //Action
    verifyLoginSucessText() {
        cy.contains('You logged into a secure area!').should('be.visible')
    }
    get loginErrorUsername() {
        return cy.get('#error')
    }
    //Action
    verifyLoginErrorUsername() {
        cy.contains('Your username is invalid!').should('be.visible')
    }
    get loginErrorPassword() {
        return cy.get('#error')
    }
    //Action with parameter
    verifyLoginErrorPassword(Text) {
        cy.contains('Your password is invalid!').should('be.visible')
    }
}
export default new loginPage();