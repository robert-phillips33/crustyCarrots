describe('Nav spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('Should display the name of our application', () => {
    cy.visit('http://localhost:3000')

    cy.get('h1').contains('Crusty')
    cy.get('h1').contains('Carrots')
    cy.get('img').should('have.attr', 'src', '/orange-carrot-2.svg')
  });
});

// .get('h1').contains('h1', 'Feedback Loop') //
// As a user, when I load the application, I can see the title of the application
