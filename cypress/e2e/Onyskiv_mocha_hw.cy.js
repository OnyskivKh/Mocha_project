

let testData = [
    {
        fieldSelector: '#exampleInputEmail1',
        inputValue: 'kristina@gmail.com'
    },
    {
        fieldSelector: '#exampleInputPassword1',
        inputValue: 'qwerty12345'
    }
];


describe('Basic form', () => {
    before('Go to the login form',() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[alt="Light Theme"].theme-preview').click();
        cy.get('a.ng-tns-c141-9').click();
        cy.get('[title="Form Layouts"]').click();

    })

    after('Check box and click the button', () => {
        cy.get('span').contains('Check me out').click();
        cy.get('div button.appearance-filled').eq(3).click();

    });


    it('Complete form with test data', () => {
        testData.forEach(testData => {
            cy.get(testData.fieldSelector).type(`${testData.inputValue}{enter}`);

        });
    });
});


