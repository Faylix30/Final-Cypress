describe('login', () => {

    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
        cy.get('[name="username"]').type('j2ee')
        cy.get('[type="password"]').clear()
        cy.get('[name="password"]').type('j2ee')
        cy.get('[name="signon"]').click()
        cy.url().should('include', 'https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('#MainImageContent > img').should('be.visible')
    })

    it.only('Tc-buy bird', () => {
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        cy.url().should('include', 'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=BIRDS')
        cy.get('h2').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get('.Button').click()
        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type(3)
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

    it('Tc-check add cart', () => {
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

    it('Tc-search Dogs', () => {
        cy.get('[size="14"]').type('Dogs')
        cy.get('[name="searchProducts"]').click()
    })

    it('Tc-search on text', () => {
        cy.get('[name="searchProducts"]').click()
        cy.contains('Please enter a keyword to search for, then press the search button.').should('be.visible')
        cy.get(':nth-child(1) > li').should('be.visible')
        cy.get(':nth-child(2) > li').should('be.visible')
        cy.get('#LogoContent > a > img').click()
    })

    it('Tc-sign out', () => {
        cy.get('#MenuContent').within(() => {
            cy.contains('Sign Out').click();
        });
        // cy.get('[href="/actions/Account.action?signoff="]').click()
        cy.get('[href="/actions/Account.action?signonForm="]').should('be.visible')

    })

})

describe('error login', () => {
    beforeEach(()=>{
        cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
    })
    it('Tc-error login', () => {
        cy.get('[name="username"]').type('hello')   
        cy.get('[name="password"]').type('j2ee')
        cy.get('[name="signon"]').click()
        cy.contains('Please enter your username and password.').should('be.visible')
    })
})