describe('Contact page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/contact')
  })

  it('should type text into input', () => {
    const testName = 'Denis Zubov'
    const testEmail = 'test@test.com'
    const testMessage = 'My message test!!!'

    cy.get('input[type="text"]').type(testName).should('have.value', testName)
    cy.get('input[type="email"]')
      .type(testEmail)
      .should('have.value', testEmail)
    cy.get('textarea').type(testMessage).should('have.value', testMessage)
  })
})
