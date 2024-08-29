
describe('MoviesList component', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "moviesList"
    })
    cy.visit('http://localhost:3000');
  });

  it('Should display all parts of the movie card', () => {
    cy.get('.movie-card')
      .should('have.length', 2)
      .get('h3').contains('Black Adam TEST')
      .get('.movie-poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-card-rating').should('exist')
  });

  it('Should not show nonexistent movie cards', () => {
    // cy.get('@MovieRequest').then((interception) => {
    // const movies = interception.response.body.movies;
    // cy.get 
    cy.get('.movie-card-rating')
  });

  it.skip('Should return an error message when no movie cards display', () => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
    //   statusCode: 404
    // }).as('errorMovie');
    cy.visit('http://localhost:3000/movies/');

  });

  // it('Should return an error message when attempting to view nonexistant movie', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436289', {
  //     statusCode: 404
  //   }).as('errorMovie');
  //   cy.visit('http://localhost:3000/movies/436289');
  // });

});


// As a user, when I load the application, I can see a collection of movies. //