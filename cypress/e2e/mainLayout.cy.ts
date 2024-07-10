import {
  FOOTER_DESCRIPTION,
  FOOTER_DISCLAIMER,
  FOOTER_TITLE,
} from '@components/Footer/constants'
import { menuData } from '@components/Footer/LinksSection/config'

describe('Main Layout testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  })

  it('routes should work correctly', () => {
    const homePage = 'Home'
    const timelinePage = 'Timeline'
    const bankCardPage = 'Bank Card'
    const contactPage = 'Contact'
    cy.contains(homePage).click().url().should('include', '/')
    cy.contains(timelinePage).click().url().should('include', '/timeline')
    cy.contains(bankCardPage).click().url().should('include', '/bank-card')
    cy.contains(contactPage).click().url().should('include', '/contact')
  })

  it('Should render the theme switcher correctly', () => {
    cy.get('#dark-mode-toggle').should('exist')
  })

  it('Should switch themes correctly', () => {
    cy.get('#dark-mode-toggle').should('not.be.checked')
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')

    cy.get('#dark-mode-toggle').click({ force: true })
    cy.get('#dark-mode-toggle').should('be.checked')
    cy.get('body').should('have.css', 'background-color', 'rgb(199, 199, 199)')

    cy.get('#dark-mode-toggle').click({ force: true })
    cy.get('#dark-mode-toggle').should('not.be.checked')
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)')
  })

  it('Should move the toggle correctly when clicked', () => {
    cy.get('#dark-mode-toggle')
      .next('label')
      .invoke('css', 'position')
      .should('eq', 'relative')
    cy.get('#dark-mode-toggle')
      .next('label')
      .invoke('css', 'left')
      .should('eq', '0px')

    cy.get('#dark-mode-toggle').click({ force: true })
    cy.get('#dark-mode-toggle')
      .next('label')
      .invoke('css', 'left')
      .should('eq', '0px')

    cy.get('#dark-mode-toggle').click({ force: true })
    cy.get('#dark-mode-toggle')
      .next('label')
      .invoke('css', 'left')
      .should('eq', '0px')
  })

  it('Should display main footer elements in desktop view', () => {
    cy.viewport(1280, 720)

    cy.get('footer').should('exist')

    cy.get('footer h3').should('contain.text', FOOTER_TITLE)

    cy.get('footer img[src*="diagramLogo"]').should('be.visible')

    cy.get('footer p').contains(FOOTER_DESCRIPTION).should('be.visible')

    cy.get('footer div').contains(menuData[0].title).should('be.visible')

    cy.get('footer p').contains(FOOTER_DISCLAIMER).should('be.visible')
  })

  it('Should display mobile footer elements correctly', () => {
    cy.viewport(375, 667)

    cy.get('footer').should('exist')

    cy.get('footer h3').should('contain.text', FOOTER_TITLE)

    cy.get('footer img[src*="diagramLogo"]').should('be.visible')

    cy.get('footer p').contains(FOOTER_DESCRIPTION).should('not.be.visible')

    cy.get('footer input[type="checkbox"]').first().check()
    cy.get('footer ul').first().should('be.visible')
  })

  it('Should have correct link behavior', () => {
    cy.viewport(1280, 720)

    menuData.forEach((menu) => {
      menu.items.forEach((item) => {
        cy.get('footer a[href*="' + item.to + '"]').should(
          'have.attr',
          'href',
          item.to
        )
      })
    })

    cy.get('footer a')
      .first()
      .trigger('mouseover')
      .invoke('css', 'color')
      .then((color) => {
        expect(color).to.eq('rgb(136, 136, 136)')
      })
  })
})
