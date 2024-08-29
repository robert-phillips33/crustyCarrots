describe('Search_Title spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not return any movies when a nonexistant title is shown', () => {
    cy.get('.search-by-title').type('Potato42069').invoke("val");
    cy.get('.movie-title').should('not.exist');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`No results matching your search, please try again!`)
    })
  });

})