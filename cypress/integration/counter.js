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
});
