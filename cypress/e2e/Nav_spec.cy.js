describe('Nav spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('Should display the name of our application', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('getMovies');

    // Visit the page after the intercept is set up
    cy.visit('http://localhost:3000');

    // Wait for the intercept alias to be called
    cy.wait('@getMovies').as('moviesRequest'); // Alias the wait result
    cy.get('h1').contains('Crusty')
    cy.get('h1').contains('Carrots')
    cy.get('img').should('have.attr', 'src', '/orange-carrot-2.svg')
  })
  it('Should have a search bar area', () => {
    // Visit the page after the intercept is set up
    cy.visit('http://localhost:3000');

      // Check that the search bar can take input; currently doesn't check that.
      cy.get('.search-by-title').type('Adam');
      cy.get('.search-by-title').should('have.value', 'Adam')


    });
  it('Should have dropdown filters', () => {

    cy.visit('http://localhost:3000')
    cy.get('.filter-by-genre').select('test').invoke("val").should("eq", "test");
  })
  });
// .get('h1').contains('h1', 'Feedback Loop') //
// As a user, when I load the application, I can see the title of the application
