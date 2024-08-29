describe('MovieCard component', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "moviesList"
    })
    cy.visit('http://localhost:3000');
  });

  it('Should display a single movie card', () => {
    it('Should display all parts of the movie card', () => {
      cy.get('.movie-card')
        .get('h3').contains('Black Adam TEST')
        .get('.movie-poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
        .get('.movie-card-rating').should('exist')
    });
  });

  it.skip("should display an error if an element is missing from MovieCard", () => {
      cy.get('.movie-poster').should('not.exist');

    });
  });

