/* eslint-disable cypress/no-unnecessary-waiting */
import testKeys from '../objects/testKeys.obj';

describe('render and interactions DESKTOP', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);

    cy.visit('/');
  });

  it('renders with arrow', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.rightArrow).should('be.visible');
    cy.get(testKeys.leftArrow).should('be.visible');
  });

  it('navigate to Learn with car Id', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.rightArrow).should('be.visible');
    cy.get(testKeys.leftArrow).should('be.visible');

    cy.get(testKeys.cardActions).should('be.visible').contains('Learn').click();

    cy.url().should('include', '/learn/xc90-recharge');
  });

  it('navigate to Shop with car Id', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.rightArrow).should('be.visible');
    cy.get(testKeys.leftArrow).should('be.visible');

    cy.get(testKeys.cardActions).should('be.visible').contains('Shop').click();

    cy.url().should('include', '/shop/xc90-recharge');
  });
});
describe('render and interactions MOBILE + Tablet', () => {
  beforeEach(() => {
    cy.viewport(900, 700);

    cy.visit('/');
  });

  it('renders with dots', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.dots).should('be.visible');

    cy.get(testKeys.rightArrow).should('not.be.visible');
    cy.get(testKeys.leftArrow).should('not.be.visible');
  });

  it('navigate to Learn with car Id', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.dots).should('be.visible');

    cy.get(testKeys.cardActions).should('be.visible').contains('Learn').click();

    cy.url().should('include', '/learn/xc90-recharge');
  });

  it('navigate to Shop with car Id', () => {
    cy.get(testKeys.navbar).should('be.visible');
    cy.get(testKeys.filter).should('be.visible');
    cy.get(testKeys.card).should('be.visible');
    cy.get(testKeys.cardActions).should('be.visible');
    cy.get(testKeys.carousel).should('be.visible');
    cy.get(testKeys.dots).should('be.visible');

    cy.get(testKeys.cardActions).should('be.visible').contains('Shop').click();

    cy.url().should('include', '/shop/xc90-recharge');
  });
});
