# Desafio Técnico - QA Engineer | Coco Bambu

Este repositório contém a solução do desafio técnico proposto pela equipe do Coco Bambu para a vaga de QA Engineer. O desafio consiste na identificação de fluxos críticos da aplicação, automação de testes de interface e automação de testes de API.

## 🧠 Etapas do Desafio

### 1. Identificação de Fluxos Importantes

Foram identificados os seguintes fluxos críticos na aplicação:
- **Fluxo 1: Escolha de Restaurante e Cardápio**
  - Motivo: Sem selecionar o restaurante, o cliente não consegue iniciar o pedido.
- **Fluxo 2: Adição de Itens ao Carrinho**
  - Motivo: Essencial para a conclusão da compra. Falhas nesse fluxo impactam diretamente a conversão.
- **Fluxo 3: Finalização do Pedido**
  - Motivo: Última etapa e a mais crítica para garantir a venda.

Todos esses fluxos foram analisados com foco em impacto no usuário final e no negócio.

### 2. Testes Automatizados de Interface (UI)

Foi utilizada a ferramenta **Cypress** para a automação do fluxo **Adição de Itens ao Carrinho**.

#### Execução dos testes UI

```bash
# Instale as dependências
npm install

# Execute os testes
npx cypress open
```

### 3. Testes Automatizados de API

As rotas testadas foram baseadas na documentação da API DummyJSON:

- Adicionar item ao carrinho
- Atualizar carrinho
- Remover item do carrinho

#### Técnica de Teste Utilizada

A técnica **Particionamento de Equivalência** foi utilizada para garantir cobertura de cenários positivos e negativos.

#### Execução dos testes API

```bash
# Execute os testes API
npx cypress run --spec "caminho/para/os/testes/api"
```

## 🛠️ Tecnologias Utilizadas

- [x] Cypress
- [x] JavaScript
- [x] Node.js

## 📁 Organização do Projeto

```
📂 tests/
 ├── ui/
 │   └── add_to_cart.cy.js
 └── api/
     ├── add_cart.cy.js
     ├── update_cart.cy.js
     └── delete_cart.cy.js
📄 README.md
📄 package.json
```

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute os testes conforme as instruções acima.

## 📬 Entrega

O desafio foi finalizado e está pronto para ser avaliado. Link do repositório: **[coloque aqui o link do seu GitHub]**

---

Desenvolvido com 💛 por [Seu Nome]
# DesafioTecnicoQA
