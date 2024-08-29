
describe('MoviesList component', () => {
  beforeEach(() => {
    cy.intercept('GET', 
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        fixture: "moviesList"
      })
    cy.visit('http://localhost:3000');
  });

  it('Should display all movie cards', () => {  
      cy.get('.movie-card').should('have.length', 2)
      .contains('h3')
      // movies.forEach((movie, index) => {
      //   cy.get('.movie-card').eq(index).within(() => {
      //   cy.contains(movie.title);
      //   cy.get('img').should('have.attr', 'src', movie.poster_path);
      //   cy.get(movie.average_rating); 
      //   });
      // });
    });
  });

  it.skip('Should not show nonexistent movie cards', () => {
    cy.get('@MovieRequest').then((interception) => {
      const movies = interception.response.body.movies;
      cy.get('.movie-card').should('have.length', movies.length);
      cy.get('.movie-card-rating')

    });
  });
// });


// As a user, when I load the application, I can see a collection of movies. //