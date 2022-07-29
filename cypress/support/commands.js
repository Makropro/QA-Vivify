// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.contains('Submit').click()
})

Cypress.Commands.add('createGallery', (title, description, imgUrl) =>{
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click()
    cy.get('#title').type(title)
    cy.get('#description').type(description)
    cy.get('.input-group > .form-control').type(imgUrl)
    cy.contains('Submit').click()
})

