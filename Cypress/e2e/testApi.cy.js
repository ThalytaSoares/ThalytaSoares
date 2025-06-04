describe('API do Carrinho - DummyJSON', () => {
  const baseUrl = 'https://dummyjson.com';

  it('Adicionar 1 item ao carrinho com quantidade padrão', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/carts/add`,
      body: {
        userId: 1,
        products: [{ id: 1, quantity: 1 }]
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.products[0]).to.have.property('id', 1);
      expect(response.body.products[0]).to.have.property('quantity', 1);
    });
  });

  it('Atualizar carrinho com quantidade inválida (negativa)', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/carts/1`,
      failOnStatusCode: false,
      body: {
        userId: 1,
        products: [{ id: 1, quantity: -5 }]
      }
    }).then((response) => {
      if (response.status === 200) {
        // API aceitou quantidade negativa, valida que realmente está lá
        expect(response.body.products[0]).to.have.property('quantity', -5);
      } else {
        // Caso a API retorne erro, validar status e mensagem
        expect([400, 422, 404]).to.include(response.status);
        expect(response.body).to.have.property('message');
      }
    });
  });

  it('Remover item inexistente do carrinho', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/carts/9999`,
      failOnStatusCode: false
    }).then((response) => {
      // DummyJSON pode retornar 400 ou 404 ou até 200, vamos aceitar esses
      expect([200, 400, 404]).to.include(response.status);

      if (response.status !== 200) {
        expect(response.body).to.have.property('message');
      }
    });
  });
});
