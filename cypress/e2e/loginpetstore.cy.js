describe('login app commands', () => {

    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
        cy.get('[name="username"]').type('j2ee')
        cy.get('[type="password"]').clear()
        cy.get('[name="password"]').type('j2ee')
        cy.get('[name="signon"]').click()
        cy.url().should('include', 'https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('#MainImageContent > img').should('be.visible')
    })

    it('Tc-buy fish', () => {
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        cy.url().should('include', 'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH')
        cy.get('h2').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        cy.get('.Button').click()
        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type(5)
        cy.get('[colspan="7"] > input').click()
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()
        cy.get(':nth-child(1) > th').should('be.visible')
        cy.get(':nth-child(14) > td > input').click()
        cy.get('[name="newOrder"]').click()
        cy.get('th').should('be.visible')
        cy.get('[name="newOrder"]').click()
        cy.get('#Catalog').should('be.visible')
        cy.get('.Button').click()
        cy.get('#Catalog').should('be.visible')
        cy.get('#BackLink > a').click()
    })

    it.only('Tc-check add cart', () => {
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        cy.url().should('include', 'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH')
        cy.get('h2').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        cy.get('.Button').click()
        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type(5)
        cy.get('[colspan="7"] > input').click()
        cy.get('[href="/actions/Cart.action?viewCart="] > img').click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.get('#BackLink > a').click()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click()
        cy.get('h2').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        cy.get('.Button').click()
        cy.get(':nth-child(3) > :nth-child(5) > input').clear()
        cy.get(':nth-child(3) > :nth-child(5) > input').type(2)
        cy.get('[colspan="7"] > input').click()
        cy.contains('EST-2').should('be.visible')
        cy.contains('EST-15').should('be.visible')
    })

    it('Tc-search', () => {
        cy.get('[size="14"]').type('Birds')
        cy.get('[name="searchProducts"]').click()
    })

    it('Tc-sign out', () => {
        cy.get('[href="/actions/Account.action?signoff="]').click()
        cy.get('[href="/actions/Account.action?signonForm="]').should('be.visible')

    })

    it('Tc-06-error login', () => {
        cy.get('[name="username"]').type('j2ee')
        cy.get('[name="password"]').type('j2ee')
        cy.get('[name="signon"]').click()
        cy.contains('Please enter your username and password.').should('be.visible')
    })

})