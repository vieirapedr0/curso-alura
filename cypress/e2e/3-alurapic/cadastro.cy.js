describe('testes de cadastro', () =>{

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })


    it('verifica mensagens de email invalido', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('josé')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica nome com menos de 2 caracteres', () =>{
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('a');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    
    it('verifica mensagens de validacao', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuarios => {

        it(`registro de novo usuario ${usuarios.userName}`, () => {
            cy.register(usuarios.email, usuarios.fullName, usuarios.userName, usuarios.password)
        })

    });

})