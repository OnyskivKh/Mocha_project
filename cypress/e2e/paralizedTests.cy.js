// describe('Multiple tests', () => {
//     //textarea[type="Search"]
//
//     let searchQuery = 'Cypress';
//     let expectedResult= 'JavaScript';

//     it(`Perform search with text: ${searchQuery}`, () =>{
//         cy.visit('https://www.google.com/');
//         cy.get('#L2AGLb .QS5gu').click();
//         cy.get('textarea[type="Search"]').type(`${searchQuery}{enter}`)
//         cy.get('h3').should('contain', expectedResult)
//
//     })
// })

///////////////////////////////

// let searchQuery = 'Cypress';
// let expectedResult = 'JavaScript';
//
// let testData = [{
//     "testData": "Cypress", "expectedResult": "JavaScript"
// }, {
//     "testData": "webdriverio", "expectedResult": "Getting Started"
// }]
//
// describe('Multiple tests', () => {
//
//
//     it(`Perform search with text: ${searchQuery}`, () => {
//         cy.visit('https://www.google.com/');
//         cy.get('#L2AGLb .QS5gu').click();
//         cy.get('textarea[type="Search"]').type(`${searchQuery}{enter}`)
//         cy.get('h3').should('contain', expectedResult)
//
//     })
// })



// let testData = [{
//     "testData": "Cypress", "expectedResult": "JavaScript"
// }, {
//     "testData": "webdriverio", "expectedResult": "Getting Started"
// }]
//
// testData.forEach(({ testData, expectedResult}) => {
//     console.log(`testData1 = ${testData}`);
//     console.log(`expectedResult1 = ${expectedResult}`)
//
//
// })
//
// testData.forEach( inputValues => {
//     console.log(`testData2 = ${inputValues.testData}`);
//     console.log(`expectedResult2 = ${inputValues.expectedResult}`)
//
// })

///////////////////////////////

// let testData = [{
//     // тестові обʼєкти
//     "testData": "Cypress", "expectedResult": "JavaScript"
// }, {
//     "testData": "webdriverio", "expectedResult": "Getting Started"
// }]

let testData = ["Cypress", "webdriverio"]


testData.forEach(testData => {
    it(`Perform search with text: ${testData}`, () => {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb .QS5gu').click();
        cy.get('textarea[type="Search"]').type(`${testData}{enter}`)
        cy.get('h3').should('contain', testData)

    })
})