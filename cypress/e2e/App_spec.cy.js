describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('Should display the name of our application', () => {
    cy.visit('http://localhost:3000')
  });
  
})