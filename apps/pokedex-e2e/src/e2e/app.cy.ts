describe('pokedex', () => {
  beforeEach(() => cy.visit('/'));

  it('should load details about a pokemon', () => {
    cy.findByPlaceholderText('Name of Pokemon...').type('pikachu');
    cy.get('#search-for-pokemon-item-0').click();
    cy.get('.btn-primary').click();

    // ensure evolution list is correct
    cy.findByTestId('pokemon-details-evolution').then((panel) => {
      cy.wrap(panel).findByText('pichu').should('be.visible');
      cy.wrap(panel).findByText('pikachu').should('be.visible');
      cy.wrap(panel).findByText('raichu').should('be.visible');
    });

    // ensure attributes are correct
    cy.findByTestId('pokemon-details-attributes').then((panel) => {
      cy.wrap(panel)
        .findByTestId('attrib=Height')
        .should('have.text', '4 decimeters');
      cy.wrap(panel)
        .findByTestId('attrib=Weight')
        .should('have.text', '60 hectograms');
      cy.wrap(panel)
        .findByTestId('attrib=Abilities')
        .should('have.text', 'static, lightning-rod');
    });

    // ensure stats are correct
    cy.findByTestId('pokemon-details-stats').then((panel) => {
      cy.wrap(panel).findByTestId('stat=hp').should('have.text', '35');
      cy.wrap(panel).findByTestId('stat=attack').should('have.text', '55');
      cy.wrap(panel).findByTestId('stat=defense').should('have.text', '40');
      cy.wrap(panel)
        .findByTestId('stat=special-attack')
        .should('have.text', '50');
      cy.wrap(panel)
        .findByTestId('stat=special-defense')
        .should('have.text', '50');
      cy.wrap(panel).findByTestId('stat=speed').should('have.text', '90');
    });

    // ensure stats are correct
    cy.findByTestId('pokemon-details-types-and-weaknesses').then((panel) => {
      cy.wrap(panel)
        .findByTestId('types')
        .then((typesPanel) => {
          cy.wrap(typesPanel).findByText('electric').should('be.visible');
        });

      cy.wrap(panel)
        .findByTestId('weaknesses')
        .then((typesPanel) => {
          cy.wrap(typesPanel).findByText('ground').should('be.visible');
        });
    });
  });
});
