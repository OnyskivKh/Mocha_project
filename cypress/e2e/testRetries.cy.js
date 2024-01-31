// повтори

describe('Test retries in test suits', () => {

    before(() =>{
        cy.visit('https://example.cypress.io');
    })

    it('Scenario 1 - just this one will correctly run', {retries: 2},() => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 2 - will fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 3 - will fail', {retries: 2}, () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})

describe('Test retries in desc', {retries: 2},() => {

    before(() =>{
        cy.visit('https://example.cypress.io');
    })

    it('Scenario 1 - just this one will correctly run', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 2 - will fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Scenario 3 - will fail',  () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})