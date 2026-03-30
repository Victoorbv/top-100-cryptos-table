describe('Main Test Ejercicio', () => {
  before(() => {
    cy.visit('http://localhost:4200');
  });

  it('Comprobar cargar elementos tabla', () => {
    cy.get('table tr').should('have.length.gt', 1);
  });

  it('Comprobar orden de mayor a menor marketcap', () => {
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

  it('Comprobar colores cambio de precio', () => {
    cy.get('td.crypto-price-change-24h').each((celda) => {
      if (celda.text().includes('-')) {
        expect(celda).to.have.class('text-danger');
      }
      else {
        expect(celda).to.have.class('text-success');
      }
    })
  })

  it('Comprobar dollar en columna precio', () => {
    cy.get('td.crypto-current-price').each((celda) => {
      const texto = celda.text();
      expect(texto.includes('$')).to.be.true;
    })
  })
});
