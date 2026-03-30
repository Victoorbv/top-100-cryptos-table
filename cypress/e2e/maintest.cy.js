describe('Main Test Ejercicio', () => {
  before(() => {
    cy.visit('http://localhost:4200');
  });

  it('Comprobar carga de elementos en la tabla', () => {
    cy.get('table tr').should('have.length.gt', 1);
  });

  it('Comprobar orden de mayor a menor market cap', () => {
    cy.get('td.crypto-market-cap').then((celdas) => {
      let valorAnterior = null;

      celdas.each((index, celda) => {
        const texto = celda.innerText || '';
        const numero = Number(texto.replace('$', '').replaceAll(',', ''));

        if (valorAnterior !== null) {
          expect(valorAnterior).greaterThan(numero);
        }

        valorAnterior = numero;
      });
    });
  });

  it('Comprobar colores de cambio de precio', () => {
    cy.get('td.crypto-price-change-24h').each((celda) => {
      if (celda.text().includes('-')) {
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

    cy.get('#search-list').should('have.length.greaterThan', 0);
    cy.get('#search-list').should('have.length.at.most', 5);
  });

  it('Comprobar buscador de cripto exacta Bitcoin', () => {
    cy.get('#search-bar').clear().type('Bitcoin');

    cy.contains('#search-list', 'Bitcoin (BTC)').should('exist');
  });
});
