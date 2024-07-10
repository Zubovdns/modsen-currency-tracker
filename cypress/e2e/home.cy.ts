describe('Footer Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  })

  it('Should render Currency page correctly', () => {
    cy.get('[data-testid="currency-container"]').should('exist')
    cy.get('[data-testid="currency-title"]').should('exist')
    cy.get('[data-testid="currency-item"]').should('exist')
  })

  it('Should show modal correctly', () => {
    cy.get('[data-testid="currency-item"]')
      .first()
      .click()
      .get('[id="modal-container-id"]')
      .should('exist')
      .get('[data-testid="currency-item-image"]')
      .should('exist')
      .last()
      .click()
      .get('[data-testid="currency-modal-close"]')
      .click()
  })
})
