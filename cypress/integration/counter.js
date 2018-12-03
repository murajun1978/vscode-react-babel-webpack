describe('counter', () => {
  it('can increment', () => {
    cy.visit('http://localhost:4000/')
      .get('#app > :nth-child(1) > :nth-child(2)')
      .click()
      .get('label')
      .should('have.text', '1');
  });

  it('can decrement', () => {
    cy.visit('http://localhost:4000/')
      .get('#app > :nth-child(1) > :nth-child(3)')
      .click()
      .get('label')
      .should('have.text', '-1');
  });
});
