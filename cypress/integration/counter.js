describe('counter', () => {
  it('can increment', () => {
    cy.visit('/')
      .getByText(/^\+$/)
      .click()
      .getByTestId('counter')
      .should('have.text', '1');
  });

  it('can decrement', () => {
    cy.visit('/')
      .getByText(/^-$/)
      .click()
      .getByTestId('counter')
      .should('have.text', '-1');
  });

  it('can reset', () => {
    cy.visit('/')
      .getByText(/^\+$/)
      .click()
      .getByText(/Reset/)
      .click()
      .getByTestId('counter')
      .should('have.text', '0');
  });
});
