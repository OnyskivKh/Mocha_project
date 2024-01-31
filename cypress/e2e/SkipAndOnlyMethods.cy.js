
describe('Feature testing', () => {


    describe.only('Positive scenarious', () => {

        it.skip('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })

        it('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })

        it('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })
    })

    describe('Negative scenarious', () => {

        it.only('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })

        it('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })

        it('Play with Mocha lib features', () => {
            cy.visit('https://example.cypress.io')
        })
    })
})