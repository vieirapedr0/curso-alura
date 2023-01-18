

Cypress.Commands.add('register', (email,fullName,userName,password) => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.contains('button', 'Register').click();
})

Cypress.Commands.add('login', (userName, password) => {
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password, {log: false});
    cy.contains('button', 'login').click();
})