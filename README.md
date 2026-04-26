# SolarDrive Vehicles

Landing page estática criada para a empresa fictícia **SolarDrive Vehicles**, fabricante brasileira de veículos movidos por energia solar. A proposta do site é apresentar uma linha de **carros compactos, sedan, SUV e scooter solar**, destacando mobilidade urbana, sustentabilidade, economia e tecnologia conectada.

## Sobre o projeto

Este projeto foi desenvolvido como trabalho acadêmico de Landing Page. A página simula um site institucional de uma marca de veículos solares, com foco em atrair possíveis clientes, apresentar os produtos principais e facilitar o contato comercial.

A empresa escolhida foi a **SolarDrive Vehicles**, descrita no enunciado como uma fabricante de carros compactos e scooters movidos exclusivamente a energia solar, projetados para ambientes urbanos e voltados a uma alternativa limpa, acessível e estilosa para o deslocamento cotidiano.

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

- **cabeçalho fixo** com navegação por links internos;
- **banner principal** de apresentação da marca;
- **carrossel de produtos** feito somente com HTML e CSS;
- **tabela comparativa** dos modelos, com preço, autonomia, uso ideal e descrição;
- **destaque do modelo selecionado** ao clicar em “Ver na tabela”;
- **seção de diferenciais**, reforçando energia solar, economia, sustentabilidade e tecnologia;
- **seção de missão**, com compromissos da marca;
- **seção “Sobre nós”**, com lista de integrantes e cargos;
- **FAQ/Perguntas Frequentes** com perguntas e respostas usando listas aninhadas;
- **formulário de contato** com nome, e-mail, assunto e mensagem;
- **rodapé institucional** com links de navegação;
- **links com ícones para redes sociais** abrindo em nova aba.

## Tecnologias usadas

- **HTML5** para estrutura e semântica da página;
- **CSS3** para layout, responsividade, animações simples e estilização;
- **Google Fonts** para tipografia externa;
- **SVG inline** para os ícones das redes sociais;
- **imagens locais** armazenadas em `assets/img`;
- **mailto** no formulário de contato para simular o envio de mensagem por e-mail.

O projeto **não usa JavaScript**, backend ou banco de dados.

## Estrutura de arquivos

```text
SolarDriveVehicles-app/
|-- index.html
|-- README.md
|-- assets/
|   |-- css/
|   |   |-- index.css
|   |   `-- variaveis.css
|   `-- img/
|       |-- logo-colorida.png
|       |-- scooter.png
|       |-- sedan.png
|       |-- suv.png
|       |-- herobg-1.3right.png
|       |-- chris.jpeg
|       |-- Berno.png
|       |-- ErickCiribelli.png
|       |-- Cayke.png
|       `-- Guilherme.jpeg
`-- .vscode/
    `-- settings.json
```

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

### Carrossel sem JavaScript

O carrossel da seção de produtos foi feito com `input type="radio"`, `label` e seletores CSS. Essa escolha permite criar uma interação visual funcional sem depender de scripts.

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
- ícones decorativos usam `aria-hidden="true"` quando não precisam ser lidos por leitores de tela;
- o menu principal possui `aria-label`;
- botões, links e campos de formulário possuem estados de foco visíveis;
- o formulário usa `label` associado a cada campo;
- links externos de redes sociais usam `target="_blank"` e `rel="noopener noreferrer"`.

## Checklist de atendimento aos requisitos do trabalho

| Requisito do enunciado | Como o projeto atende |
|---|---|
| Criar uma Landing Page para uma empresa fictícia | A página foi criada para a SolarDrive Vehicles. |
| Apresentar empresa/produtos de forma atrativa | O site possui banner, produtos, diferenciais, missão, FAQ e contato. |
| Utilizar semântica do HTML5 | Foram usadas tags como `header`, `nav`, `main`, `section`, `article`, `figure`, `table`, `address` e `footer`. |
| Usar pelo menos 5 tags semânticas diferentes | O projeto usa mais de 5 tags semânticas apropriadas. |
| Links com ícones para Twitter/X, Facebook e Instagram | O menu “Redes sociais” contém os três ícones em SVG. |
| Redes sociais abrirem em nova aba | Os links usam `target="_blank"`. |
| CSS separado | O estilo está nos arquivos `assets/css/index.css` e `assets/css/variaveis.css`. |
| CSS com comentários | O arquivo `index.css` possui comentários separando as partes principais do layout. |
| Paleta com pelo menos 3 cores | A paleta usa verdes, amarelos, azuis e tons neutros. |
| Pelo menos 2 seções diferentes | O site possui várias seções: produtos, diferenciais, missão, time, FAQ e contato. |
| Tabela de produtos/serviços | A seção de produtos possui uma tabela comparativa com modelos, preços, autonomia, uso ideal e descrição. |
| Formulário de contato | A seção de contato possui formulário com nome, e-mail, assunto e mensagem. |
| Lista do time | A seção “Sobre nós” possui lista de membros e cargos. |
| FAQ com perguntas e respostas | O FAQ possui perguntas, respostas e listas aninhadas. |
| Navegabilidade | Menu, botões, links internos, carrossel, FAQ e links de rodapé são clicáveis. |
| Legibilidade e tipografia | O projeto usa duas famílias de fonte e vários tamanhos de texto. |
| Imagens relevantes | Há imagens do banner, logo, veículos e equipe. |
| Pelo menos 3 imagens com `alt` apropriado | O site possui mais de 3 imagens relevantes com `alt` descritivo. |
| Código limpo e organizado | O código está indentado, dividido em seções e com nomes de classes claros. |
| Documentação | Este README explica o desenvolvimento, tecnologias, autores e como testar. |

## Como testar o site

1. Baixe ou mantenha todos os arquivos na mesma pasta do projeto.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Navegue pelo menu superior para testar as âncoras internas.
4. Passe o mouse ou navegue por teclado em **Redes sociais** para testar o dropdown.
5. Clique nos ícones de X/Twitter, Facebook e Instagram e confira se abrem em nova aba.
6. Use as setas e bolinhas do carrossel de produtos.
7. Clique em **Ver na tabela** em cada produto e confira o destaque no comparativo.
8. Abra e feche as perguntas do FAQ.
9. Preencha o formulário de contato e clique em **Enviar mensagem** para testar a abertura do aplicativo de e-mail.
10. Reduza a largura da tela ou use o modo responsivo do navegador para conferir a adaptação em telas menores.

Também é possível abrir o projeto com a extensão **Live Server** do VS Code.

## Observações importantes

- O site foi desenvolvido para desktop e telas menores.
- A tabela comparativa possui rolagem horizontal em telas pequenas para preservar a leitura.
- O formulário não salva dados porque o projeto é apenas estático.
- O `mailto` depende de um aplicativo de e-mail configurado no dispositivo do usuário.
- Os valores, autonomias, endereços e dados comerciais são fictícios, usados apenas para simular uma landing page institucional.
- O carrossel e o FAQ funcionam sem JavaScript.

## Pontos fortes do projeto

- A escolha da empresa está alinhada ao enunciado da SolarDrive Vehicles.
- O site apresenta mais conteúdo do que o mínimo exigido.
- A página tem boa separação visual entre seções.
- O projeto usa HTML semântico em várias partes.
- A tabela, o formulário, a lista de equipe e o FAQ cobrem bem as seções sugeridas no trabalho.
- As redes sociais possuem ícones e abrem em nova aba.
- O código CSS está separado e organizado por blocos.
- A ausência de JavaScript simplifica a entrega e mostra domínio de HTML e CSS.

## Melhorias opcionais para uma versão futura

Estas melhorias não são obrigatórias para atender ao enunciado, mas poderiam deixar o projeto ainda mais completo:

- adicionar uma seção “Onde estamos” com endereço e mapa ilustrativo;
- adicionar uma seção “Trabalhe conosco” ou “Cases de sucesso”;
- incluir um aviso visual após envio do formulário, caso o projeto passe a usar JavaScript;
- trocar o `mailto` por integração real com backend em uma versão futura;
- adicionar `aria-expanded` ao botão de redes sociais se o menu passar a ser controlado por JavaScript;
- revisar a regra de `prefers-reduced-motion` para usar `scroll-behavior: auto` caso seja exigido um cuidado maior com acessibilidade de movimento;
- remover variáveis CSS que não estejam sendo usadas, caso o professor avalie limpeza extrema do código;
- adicionar uma legenda ou texto curto explicando que os preços e autonomias são fictícios.

## Autores

- Chris
- Matheus Berno
- Erick Ciribelli
- Cayke
- Guilherme
