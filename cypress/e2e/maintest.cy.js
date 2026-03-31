describe('Main Test Ejercicio', () => {
  before(() => {
    cy.intercept('GET', '**/coins/markets**').as('getCryptos');
    cy.visit('http://localhost:4200');
    cy.wait('@getCryptos');
  });

  it('Comprobar carga de elementos en la tabla', () => {
    cy.get('table tr').should('have.length.gt', 2);
  });

  it('Comprobar orden de mayor a menor market cap', () => {
    let valorAnterior = null;
    cy.get('td.crypto-market-cap').each(($celda) => {
      const texto = $celda.text() || '';
      const numero = Number(texto.replace('$', '').replaceAll(',', ''));

      if (valorAnterior !== null) {
        expect(valorAnterior).greaterThan(numero);
      }

      valorAnterior = numero;
    });
  });
  // Cambiar por < 0 
  it('Comprobar colores de cambio de precio', () => {
    cy.get('td.crypto-price-change-24h').each((celda) => {
      if (celda.text().replace('%', '') < 0) {
        expect(celda).to.have.class('text-danger');
      }
      else {
        expect(celda).to.have.class('text-success');
      }
    })
  })

  it('Comprobar dólar en la columna precio', () => {
    cy.get('td.crypto-current-price').each((celda) => {
      const texto = celda.text();
      expect(texto.includes('$')).to.be.true;
    })
  })

  it('Comprobar buscador límite de 5 sugerencias', () => {
    cy.get('#search-bar').clear().type('Et');
    cy.get('#search-list li').should('have.length', 5);
  });

  it('Comprobar buscador de cripto exacta Bitcoin', () => {
    cy.get('#search-bar').clear().type('Bitcoin');

    cy.contains('#search-list li', 'Bitcoin (BTC)').should('exist');
  });
   
  it('Comprobar con get array vacio', () => {
    cy.intercept('GET', '**/coins/markets**', []).as('getEmptyCryptos');
    cy.visit('http://localhost:4200');
    cy.wait('@getEmptyCryptos');
    cy.get('table thead tr').should('exist');
    cy.get('table tbody tr').should('have.length', 0);
  });
});
