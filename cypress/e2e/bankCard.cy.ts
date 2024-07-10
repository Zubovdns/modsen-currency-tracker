describe('Bank card page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/bank-card')
  })

  it('Should render bank-card page correctly', () => {
    cy.get('[data-testid="bank-map"]').should('exist')
    cy.get('[data-testid="bank-search"]').should('exist')
  })

  it('Should search correctly', () => {
    cy.get('[data-testid="bank-search"]')
      .type('us')
      .contains('US Dollar')
      .should('exist')
      .click()
  })
})
