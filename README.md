## Projeto Big Big Burger

Este documento descreve o projeto Big Big Burger, uma página web para visualizar o cardápio de uma hamburgueria. O projeto utiliza as seguintes tecnologias:
📖
* **HTML:** Estrutura básica da página.
* **CSS (Tailwind CSS):** Estilização da página.
* **JavaScript:** Funcionalidades interativas.

## Recursos utilizados

* **Imagens:** As imagens dos hamburgers e refrigerantes estão armazenadas na pasta `assets`.
* **Font Awesome:** Ícones utilizados no site, como o carrinho de compras (`fa-cart-plus`).

### Estrutura da pasta do projeto

* `index.html`: Arquivo principal da página.
* `styles/output.css`: Arquivo compilado do Tailwind CSS.
* `script.js`: Arquivo JavaScript com as funcionalidades interativas.
* `assets/`: Pasta contendo as imagens utilizadas no site.

### Funcionalidades do JavaScript

* **Carrinho de compras:**
    * Adiciona itens ao carrinho clicando no botão "Adicionar ao Carrinho".
    * Atualiza o modal do carrinho mostrando os itens adicionados, quantidade e preço total.
    * Permite remover itens do carrinho.
* **Validação do endereço:**
    * Exibe um aviso caso o campo de endereço esteja vazio ao clicar em "Finalizar pedido".
* **Checkout:**
    * Verifica se o restaurante está aberto no momento do pedido.
    * Valida o preenchimento do endereço antes de enviar o pedido.
    * Simula o envio do pedido para o WhatsApp (não implementado uma API real).

### Verificando se o restaurante está aberto

O script verifica a hora atual e compara com o horário de funcionamento do restaurante (18:00 às 20:00). O horário de funcionamento é definido na função `checkRestaurantOpen`. A cor do fundo do elemento com o horário muda de acordo com o estado (aberto/fechado).

**Observação:** O envio do pedido para o WhatsApp não é funcional. Apenas simula a abertura do aplicativo com a mensagem e endereço preenchidos.

### Como executar o projeto

1. Certifique-se de ter o Node.js e npm instalados.
2. Clone o repositório do projeto ou baixe os arquivos.
3. Abra o terminal no diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do Tailwind CSS.
5. Abra o arquivo `index.html` em um navegador web.
## Observações:

* A ferramenta é gratuita e pode ser usada por qualquer pessoa.
* Sinta-se à vontade para contribuir com o projeto ou enviar sugestões de melhorias.

## Licença

Este projeto é licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](https://github.com/victorferreiradev/cleaninput/blob/main/LICENSE).

## Autor

Victor Ferreira

[GitHub](https://github.com/victorferreiradev)

---
