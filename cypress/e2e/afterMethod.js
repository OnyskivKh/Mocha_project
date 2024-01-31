beforeEach(() =>{
  cy.log('Execute 1 time after all tests');
})

describe('after method', () => {

  before(() =>{
    cy.visit('https://example.cypress.io');
  })

  after(() =>{
    cy.log('Execute 1 time after all tests');
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

describe('afterEach method', () => {

  beforeEach(() =>{
    cy.visit('https://example.cypress.io');
  })

  afterEach(() =>{
    cy.log('Execute each time after all tests');
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