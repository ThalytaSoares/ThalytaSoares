describe('Fluxo de login e adição ao carrinho', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://app-hom.cocobambu.com/entrar');
  });

  it('Deve fazer login e adicionar item ao carrinho', () => {
    // Login
    cy.get('input[placeholder="E-mail"]').type('thalytagsoares@gmail.com');
    cy.get('input[name="password"]').type('Mil090416@');
    cy.contains('ENTRAR').click();

    // Fecha o modal
    cy.contains('FECHAR').click();

    // Código de acesso
    const codigo = 'AAAAAA';
    cy.get('input[autocomplete="one-time-code"]', { timeout: 10000 }).should('have.length', 6)
      .each((input, index) => {
        cy.wrap(input).type(codigo[index]);
      });

    //Direciona para a página de delivery após o login
    cy.contains('ACESSAR').click();
    cy.url({ timeout: 10000 }).should('include', '/delivery');

    // Aguarda carregamento da interface
    cy.wait(20000);

    //Tira do foco o campo de pesquisa para evitar conflito
    cy.get('.search-input').clear({force:true}).blur({force:true})
    //Seleciona o item do cardápio
    cy.contains('item-card', 'Bacalhau à Espanhola').click({force:true})
    //Adiciona o item no carrinho
    cy.contains('span', 'ADICIONAR').parents('button').click({ force: true })
    cy.get('.items-container').first().click({ force: true });
    //Abre a sacola e verifica se os itens adicionados são os mesmos escolhidos no cardápio
    cy.get('.items-container').contains('Ver sacola').click({ force: true });
    cy.get('.container-item .name:first-of-type span', { timeout: 10000 })
    .should('contain.text', 'Bacalhau à Espanhola');

  });
});

