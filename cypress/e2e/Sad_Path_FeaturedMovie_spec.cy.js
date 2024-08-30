describe('Sad_Path_FeaturedMovie_spec', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436289', {
      statusCode: 404
    }).as('getErrorMovie');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436289/videos', {
      statusCode: 404
    }).as('getErrorMovieVids');
    cy.visit('http://localhost:3000/movies/436289');
  })
  
  it('Should return a 404 if it cannot find the movie', () => {
    cy.get('h2')
  });
});