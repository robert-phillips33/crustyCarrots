describe('MovieCard component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('getMovies');
    cy.visit('http://localhost:3000');
    cy.wait('@getMovies').as('moviesRequest'); 
  });

  it('Should display a single movie card', () => {
    cy.get('@moviesRequest').then((interception) => {
      const movie = interception.response.body.movies[0];

      cy.contains(movie.title);
      cy.get('.movie-poster').should('have.attr', 'src', movie.poster_path);
      cy.get(movie.average_rating);
    });
  });

  it("should display an error if an element is missing from MovieCard", ()=>{
    cy.get('@moviesRequest').then((interception) => {
      const movie = interception.response.body.movies[41];
      cy.get('.movie-poster').should('not.exist');
      

  })
});


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})