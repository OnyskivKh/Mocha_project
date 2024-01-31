describe('before method', () => {

    before(() =>{
        cy.visit('https://example.cypress.io');
    })

    it('Scenario 1 - just this one will correctly run', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 2 - will fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 3 - will fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})

describe('beforeEach method', () => {

    beforeEach(() =>{
        cy.visit('https://example.cypress.io');
    })

    it('Scenario 1 ', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 2 ', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 3', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})