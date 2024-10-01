describe('Register Test', () => {
  it('Visits register page', () => {
    cy.visit('/register')
    cy.contains('Username')
    cy.contains('Password')
  })
})
