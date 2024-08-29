describe('FeaturedMovie component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'featuredMovie'
    }).as('getMovie');

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      fixture: 'videos'
    })
    
    cy.visit('http://localhost:3000/movies/436270');

  });

  it('Should display the correct movie details for Black Adam', () => {
    cy.get('.featured-movie-title-poster-rating h2').should('contain', 'Black Adam');
    cy.get('.featured-movie-poster').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg');
    cy.get('.carrot-rating').should('exist');
    cy.get('.featured-movie-tagline h3').should('contain', 'The world needed a hero. It got Black Adam.');
    cy.get('.featured-movie-detail').should('contain', '2022-10-19')
      .and('contain', '125 minutes')
      .and('contain', '$200000000')
      .and('contain', '$384571691');
    cy.get('.featured-movie-genres-container').within(() => {
      cy.get('.featured-movie-genres-box').should('have.length', 3)
        .and('contain', 'Action')
        .and('contain', 'Fantasy')
        .and('contain', 'Science Fiction');
    });
  });

  it('Should navigate back to MoviesList when "See all Movies" is clicked', () => {
    cy.get('.featured-movie-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });


  it('Should return an error message when attempting to view nonexistant movie', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436289', {
      statusCode: 404
    }).as('errorMovie');
    cy.visit('http://localhost:3000/movies/436289');

  });
});

