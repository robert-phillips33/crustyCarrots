
describe('MoviesList component', () => {
  beforeEach(() => {
    // Intercept the API request before visiting the page
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('getMovies');

    // Visit the page after the intercept is set up
    cy.visit('http://localhost:3000');

    // Wait for the intercept alias to be called
    cy.wait('@getMovies').as('moviesRequest'); // Alias the wait result
  });

  it('Should display all movie cards', () => {
    // Access the interception result from the alias set in beforeEach
    cy.get('@moviesRequest').then((interception) => {
      const movies = interception.response.body.movies;

      // Check that the number of movie cards matches the number of movies
      cy.get('.movie-card').should('have.length', movies.length);

      // Loop through the movies and verify content
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
      cy.contains('.carrot-rating')

    })
  })
});


// As a user, when I load the application, I can see a collection of movies. //