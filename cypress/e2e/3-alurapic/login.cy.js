describe('login e registro de usuario alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('login de usuario valido', () =>{
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a','(Logout)').should('be.visible');
    })

    it('login de usuario invalido', () =>{
        cy.login('pedro', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})    