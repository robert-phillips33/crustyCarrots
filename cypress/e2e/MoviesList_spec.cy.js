
describe('MoviesList component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('getMovies');
    cy.visit('http://localhost:3000');
    cy.wait('@getMovies').as('moviesRequest'); 
  });

  it('Should display all movie cards', () => {
    cy.get('@moviesRequest').then((interception) => {

      const movies = interception.response.body.movies;
      
      cy.get('.movie-card').should('have.length', movies.length);
      movies.forEach((movie, index) => {
        cy.get('.movie-card').eq(index).within(() => {
        cy.contains(movie.title);
        cy.get('img').should('have.attr', 'src', movie.poster_path);
        cy.get(movie.average_rating); 
        });
      });
    });
  });

  it('Should not show nonexistent movie cards', () => {
    cy.get('@moviesRequest').then((interception) => {
      const movies = interception.response.body.movies;
      cy.get('.movie-card').should('have.length', movies.length);
      cy.get('.movie-card-rating')

    });
  });
});


// As a user, when I load the application, I can see a collection of movies. //