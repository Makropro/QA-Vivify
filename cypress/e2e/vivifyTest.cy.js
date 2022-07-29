describe('Gallery app e2e', () => {
  it('It should visit site', () => {
    cy.visit('https://gallery-app.vivifyideas.com/')
  })
  it('It should login', () => {
    cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    cy.login('ignjatic1337@gmail.com', 'testtest123')
  });
  it('Should create gallery', () => {
    cy.createGallery('Cypress gallery', 
                      'Cypress description', 
                      'https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1')
  });
  it('should edit gallery from step before', () => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.contains('Cypress gallery').click()
    cy.get('a.btn').click()
    cy.get('#email').type('ignjatic1337@gmail.com')
    cy.get('#password').type('testtest123')
    cy.contains('Submit').click()
    cy.contains('Cypress gallery').click()
    cy.get('a.btn').click()
    cy.get('#title').type(' edited')
    cy.get('#description').type(' lorem ipsum lorem ipsum')
    cy.contains('Submit').click()
    
  });
  it('should comment gallery', () => {
    cy.get('textarea').type('This is comment')
    cy.contains('Submit').click()
  });
  it('Should delete gallery', () => {
    cy.contains('Delete Gallery').click()
  });
  it('should logout', () => {
    cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
  });
})