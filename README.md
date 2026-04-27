# SolarDrive Vehicles

Landing page estática criada para a empresa fictícia **SolarDrive Vehicles**, fabricante brasileira de veículos movidos por energia solar. A proposta do site é apresentar uma linha com **scooter, sedan e SUV solar**, destacando mobilidade urbana, sustentabilidade, economia e tecnologia conectada.

## Sobre o projeto

Este projeto foi desenvolvido como trabalho acadêmico de Landing Page. A página simula um site institucional de uma marca de veículos solares, com foco em atrair possíveis clientes, apresentar os produtos principais e facilitar o contato comercial.

A empresa escolhida foi a **SolarDrive Vehicles**, descrita no enunciado como uma fabricante de veículos solares para uso urbano. Neste site, a linha foi representada por três modelos principais: Scooter One, Sedan S e SUV Terra.

## Objetivo da Landing Page

O objetivo da página é funcionar como a porta de entrada da marca, apresentando de forma clara:

- quem é a SolarDrive Vehicles;
- quais veículos são oferecidos;
- quais diferenciais tornam a marca sustentável e tecnológica;
- informações comparativas dos modelos;
- dúvidas frequentes dos clientes;
- membros da equipe fictícia;
- formas de contato e solicitação de cotação/test drive.

## Funcionalidades e seções do site

O site apresenta:

- **cabeçalho sticky** com navegação por links internos, layout em três áreas no desktop e versão compacta no mobile;
- **banner principal** de apresentação da marca;
- **carrossel de produtos** feito somente com HTML e CSS;
- **tabela comparativa** dos modelos, com preço, autonomia, uso ideal e descrição;
- **destaque do modelo selecionado** ao clicar em “Ver na tabela”;
- **seção de diferenciais**, reforçando energia solar, economia, sustentabilidade e tecnologia;
- **seção de missão**, com compromissos da marca;
- **seção “Sobre nós”**, com lista de integrantes e cargos;
- **FAQ/Perguntas Frequentes** com perguntas, respostas, listas aninhadas e animação de abertura em CSS;
- **formulário de contato** com nome, e-mail, assunto e mensagem;
- **rodapé institucional** com links de navegação e ícones de redes sociais;
- **menu de redes sociais** no cabeçalho e no rodapé, com ícones locais e links abrindo em nova aba.

## Tecnologias usadas

- **HTML5** para estrutura e semântica da página;
- **CSS3** para layout, responsividade, animações simples, dropdowns e estilização;
- **Google Fonts** para tipografia externa;
- **arquivos SVG locais** para os ícones das redes sociais, salvos em `assets/img`;
- **imagens locais** armazenadas em `assets/img`;
- **mailto** no formulário de contato para simular o envio de mensagem por e-mail.

O projeto **não usa JavaScript**, backend ou banco de dados.

## Principais decisões de desenvolvimento

### HTML semântico

A página usa tags semânticas para deixar o código mais organizado, acessível e coerente com o propósito de cada área. Entre as principais tags utilizadas estão:

- `<header>` para o cabeçalho;
- `<nav>` para menus de navegação;
- `<main>` para o conteúdo principal;
- `<section>` para dividir as partes da landing page;
- `<article>` para blocos independentes de conteúdo;
- `<figure>` para imagens dos produtos;
- `<table>`, `<thead>`, `<tbody>`, `<th>` e `<td>` para a tabela comparativa;
- `<details>` e `<summary>` para o FAQ;
- `<address>` para informações de contato;
- `<footer>` para o rodapé.

### CSS separado e organizado

O CSS foi separado em dois arquivos:

- `assets/css/variaveis.css`: concentra variáveis de cores, fontes e espaçamentos de âncoras;
- `assets/css/index.css`: concentra o reset, layout, componentes, seções, responsividade e estados interativos.

O arquivo principal de estilos possui comentários separando as partes do layout, como reset, cabeçalho, banner, produtos, tabela, diferenciais, FAQ, contato, rodapé e responsividade.

### Responsividade

O layout foi ajustado para funcionar melhor em desktop, tablet e celular. No mobile, o cabeçalho fica mais compacto: logo e botão de contato aparecem na primeira linha, enquanto os links principais ficam logo abaixo em formato reduzido.

A tabela comparativa usa rolagem horizontal em telas pequenas para preservar a leitura das colunas, e os cards das seções passam de várias colunas para uma coluna conforme a largura da tela diminui.

### Carrossel sem JavaScript

O carrossel da seção de produtos foi feito com `input type="radio"`, `label` e seletores CSS. Essa escolha permite criar uma interação visual funcional sem depender de scripts.

Os radios ficam invisíveis e fora do fluxo visual para evitar que o navegador reposicione a página ao clicar nas setas ou bolinhas do carrossel.

### FAQ nativo

O FAQ utiliza `<details>` e `<summary>`, tags nativas do HTML que permitem abrir e fechar respostas sem JavaScript. As respostas também usam listas aninhadas, atendendo ao formato solicitado para perguntas frequentes.

### Formulário de contato

O formulário possui os campos exigidos:

- nome;
- e-mail;
- assunto;
- mensagem.

Como o projeto é estático e não possui backend, o envio usa `mailto:contato@solardrive.com.br`, abrindo o aplicativo de e-mail do usuário com os dados para revisão.

### Acessibilidade básica

Foram aplicados cuidados básicos de acessibilidade:

- imagens relevantes possuem `alt` descritivo;
- ícones decorativos, como os dos menus de redes sociais, usam `alt=""` e `aria-hidden="true"` para evitar leitura repetida por leitores de tela;
- o menu principal possui `aria-label`;
- botões, links e campos de formulário possuem estados de foco visíveis;
- o formulário usa `label` associado a cada campo;
- links externos de redes sociais no cabeçalho e no rodapé usam `target="_blank"` e `rel="noopener noreferrer"`.

## Como testar o site

1. Baixe ou mantenha todos os arquivos na mesma pasta do projeto.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Navegue pelo menu superior para testar as âncoras internas.
4. Passe o mouse ou navegue por teclado em **Redes sociais** no cabeçalho para testar o dropdown.
5. Clique nos ícones de X/Twitter, Facebook e Instagram e confira se abrem em nova aba.
6. Use as setas e bolinhas do carrossel de produtos.
7. Clique em **Ver na tabela** em cada produto e confira o destaque no comparativo.
8. Abra e feche as perguntas do FAQ.
9. Confira se a animação de abertura do FAQ acontece de forma suave.
10. Preencha o formulário de contato e clique em **Enviar mensagem** para testar a abertura do aplicativo de e-mail.
11. Clique nos ícones de redes sociais também no rodapé.
12. Reduza a largura da tela ou use o modo responsivo do navegador para conferir o cabeçalho compacto, a tabela com rolagem horizontal e o rodapé centralizado.

Também é possível abrir o projeto com a extensão **Live Server** do VS Code.

## Observações importantes

- O site foi desenvolvido para desktop e telas menores.
- O cabeçalho muda de organização em telas pequenas para ocupar menos altura.
- A tabela comparativa possui rolagem horizontal em telas pequenas para preservar a leitura.
- O formulário não salva dados porque o projeto é apenas estático.
- O `mailto` depende de um aplicativo de e-mail configurado no dispositivo do usuário.
- Os valores, autonomias, endereços e dados comerciais são fictícios, usados apenas para simular uma landing page institucional.
- O carrossel, o dropdown de redes e o FAQ funcionam sem JavaScript.

## Equipe fictícia apresentada no site

- Chris Santos: CEO & Cofundador
- Matheus Berno: CTO
- Erick Ciribelli: CMO
- Cayke Garcia: Head de Design
- Guilherme Ferreira: Head de Operações

## Autores do trabalho

- Júlia Santos 
- Matheus Berno
- Erick Ciribelli
- Cayke Garcia
- Guilherme Ferreira
