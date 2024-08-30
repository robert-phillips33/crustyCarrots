
describe('MoviesList component', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "moviesList"
    }).as('getAllMovie')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'featuredMovie'
    }).as('getMovie');

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      fixture: 'videos'
    }).as('getVideos')

    cy.visit('http://localhost:3000');
  });

  it('Should display all parts of the movie card', () => {
    cy.get('.movie-card')
      .should('have.length', 2)
      .get('h3').contains('Black Adam TEST')
      .get('.movie-poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-card-rating').should('exist')
  });

  it('Should accept a click on a movie card and take you to a featured movie', () => {
    cy.get('[href="/movies/436270"] > .movie-card').click()
    cy.get('h2').contains('Black Adam')
  })
});


// As a user, when I load the application, I can see a collection of movies. //