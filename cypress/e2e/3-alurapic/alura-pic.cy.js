describe('tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })


    it('verifica nome da aplicacao na tela inicial', () =>{
        cy.contains('a', 'ALURAPIC ').should('be.visible')

    })


})


