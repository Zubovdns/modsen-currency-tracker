describe('Timeline Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/timeline')
  })

  it('Should render timeline page correctly', () => {
    cy.get('button').should('exist')
    cy.get('canvas').should('exist')
  })

  it('Should show modal correctly', () => {
    cy.get('button')
      .click()
      .get('[id="modal-container-id"]')
      .should('exist')
      .get('[data-testid="currency-modal-close"]')
      .click()
  })

  it('Should add new field correctly', () => {
    cy.get('button').click().get('[id="modal-container-id"]')
    cy.get('[data-testid="add-button"]').click()
    cy.get('[data-testid="field-container"]').should('have.length', 1)
  })

  it('Should delete new field correctly', () => {
    cy.get('button').click().get('[id="modal-container-id"]')
    cy.get('[data-testid="add-button"]').click()
    cy.get('[data-testid="remove-button"]').first().click()
    cy.get('[data-testid="field-container"]').should('have.length', 0)
  })

  it('Should check validation correctly', () => {
    cy.get('button').click().get('[id="modal-container-id"]')
    cy.get('[data-testid="add-button"]').click()
    cy.get('[data-testid="number-input-o"]')
      .type('100')
      .should('have.value', '100')
    cy.get('[data-testid="number-input-h"]')
      .type('120')
      .should('have.value', '120')
    cy.get('[data-testid="number-input-l"]')
      .type('90')
      .should('have.value', '90')
    cy.get('[data-testid="number-input-c"]')
      .type('110')
      .should('have.value', '110')
  })

  it('Should show notification correctly', () => {
    cy.get('button').click().get('[id="modal-container-id"]')
    cy.get('[data-testid="random-data-button"]').click()
    cy.contains('График успешно построен').should('exist')
  })
})
