# SolarDrive Vehicles

Landing page estática criada para a empresa fictícia **SolarDrive Vehicles**, fabricante brasileira de veículos urbanos movidos a energia solar. O projeto apresenta uma linha com **scooter, sedan e SUV solar**, reforçando mobilidade limpa, tecnologia, sustentabilidade e contato comercial.

## Sobre o projeto

Este projeto foi desenvolvido como trabalho acadêmico de landing page. A proposta é simular o site institucional de uma marca de veículos solares, com foco em:

- apresentar a empresa;
- destacar os modelos principais;
- reforçar diferenciais sustentáveis e tecnológicos;
- responder dúvidas frequentes;
- facilitar cotação, test drive e contato.

## Estado atual da entrega

A versão atual do projeto já está alinhada com a reformulação visual final:

- nova paleta de cores inspirada em energia solar, tecnologia e mobilidade sustentável;
- identidade visual centralizada em variáveis CSS semânticas em `assets/css/variaveis.css`;
- atualização dos componentes principais para a nova marca visual, incluindo cabeçalho, banner, cards, FAQ, formulário, comparativo e rodapé;
- logo principal e logo do rodapé ajustadas à nova paleta;
- ícones sociais locais em SVG na cor amarelo-solar;
- carrossel funcional e acessível sem JavaScript;
- projeto mantido como site estático, sem backend e sem scripts.

## Objetivo da landing page

O site foi pensado para funcionar como porta de entrada da marca, apresentando de forma clara:

- quem é a SolarDrive Vehicles;
- quais veículos são oferecidos;
- quais diferenciais tornam a marca sustentável e tecnológica;
- informações comparativas dos modelos;
- dúvidas frequentes dos clientes;
- membros da equipe fictícia;
- formas de contato e solicitação de cotação ou test drive.

## Funcionalidades e seções do site

O site apresenta:

- **cabeçalho sticky** com navegação por âncoras internas;
- **banner principal** com apresentação da marca;
- **carrossel de produtos** feito somente com HTML e CSS;
- **tabela comparativa** com preço, autonomia, uso ideal e descrição;
- **destaque temporário na tabela** ao clicar em “Ver na tabela”;
- **seção de diferenciais**;
- **seção de missão**;
- **seção “Sobre nós”** com cards do time;
- **FAQ** com `details` e `summary`;
- **formulário de contato** com `mailto`;
- **rodapé institucional** com links internos e redes sociais;
- **menu de redes sociais** no cabeçalho com abertura por hover e foco.

## Tecnologias usadas

- **HTML5** para estrutura e semântica;
- **CSS3** para layout, responsividade, animações simples e interação sem script;
- **Google Fonts** para tipografia;
- **SVGs locais** para os ícones das redes sociais;
- **imagens locais** em `assets/img`;
- **`mailto:`** no formulário para simular envio por e-mail.

O projeto **não usa JavaScript**, backend ou banco de dados.

## Estrutura dos arquivos

- `index.html`: estrutura principal da landing page;
- `assets/css/variaveis.css`: tokens de cor, tipografia, sombras e offsets de âncora;
- `assets/css/index.css`: reset, componentes, seções, responsividade e estados interativos;
- `assets/img/logo-colorida.png`: logo principal;
- `assets/img/logo-coloridaFOOTER.png`: versão da logo preparada para o rodapé;
- `assets/img/icone-x.svg`, `assets/img/icone-facebook.svg`, `assets/img/icone-instagram.svg`: ícones sociais locais;
- `assets/img/*.png`, `assets/img/*.jpg`, `assets/img/*.jpeg`: imagens dos produtos, banner e equipe.

## Decisões de desenvolvimento

### HTML semântico

A página usa tags semânticas para organizar melhor o conteúdo e manter coerência estrutural. Entre elas:

- `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`;
- `<article>` e `<figure>` para os blocos de conteúdo e imagens;
- `<table>`, `<thead>`, `<tbody>`, `<th>` e `<td>` para o comparativo;
- `<details>` e `<summary>` para o FAQ;
- `<address>` para os dados de contato.

### CSS separado e organizado

O CSS foi mantido em dois arquivos:

- `assets/css/variaveis.css`: concentra a identidade visual e tokens reutilizáveis;
- `assets/css/index.css`: concentra layout, componentes, seções, interações e media queries.

### Reformulação visual completa

A paleta foi reconstruída para combinar:

- **solar**: amarelo e dourado para energia e destaque;
- **tecnologia limpa**: azul profundo e grafite;
- **sustentabilidade**: verde energético;
- **neutros claros**: superfícies leves e legíveis.

Essa paleta foi aplicada em botões, cards, tabela, FAQ, formulário, cabeçalho, rodapé e elementos de destaque, garantindo pelo menos três cores bem distribuídas pela página.

### Carrossel

O carrossel funciona somente com HTML e CSS.

Na versão final, os próprios `input type="radio"` servem como controle visual e acessível do componente. Isso permite:

- trocar de slide sem script;
- navegar por teclado usando `Tab`;
- mudar a seleção usando as setas do teclado em navegadores compatíveis;
- manter a interface funcional também com mouse.

### FAQ nativo

O FAQ usa `details` e `summary`, garantindo uma solução nativa, semântica e sem JavaScript.

### Formulário de contato

O formulário possui os campos:

- nome;
- e-mail;
- assunto;
- mensagem.

Como o projeto é estático, o envio usa `mailto:contato@solardrive.com.br`.

## Acessibilidade e usabilidade

Foram aplicados cuidados básicos de acessibilidade:

- imagens relevantes com `alt` descritivo;
- elementos decorativos com `aria-hidden="true"` quando apropriado;
- menu principal e áreas de navegação com `aria-label`;
- estados de foco visíveis em links, botões, campos e controles;
- dropdown do cabeçalho acessível por hover e `focus-within`;
- carrossel operável sem JavaScript e com foco por teclado;
- tabela comparativa com estrutura semântica adequada;
- FAQ nativo com comportamento previsível.

## Como testar o site

1. Mantenha todos os arquivos na mesma pasta do projeto.
2. Abra `index.html` em um navegador moderno.
3. Navegue pelo menu superior para testar as âncoras internas.
4. Passe o mouse ou navegue por teclado em **Redes sociais** no cabeçalho para testar o dropdown.
5. Clique nos ícones de X, Facebook e Instagram e confira se abrem em nova aba.
6. Use os controles do carrossel para alternar entre Scooter One, Sedan S e SUV Terra.
7. Navegue por teclado até os controles do carrossel para validar o foco e a seleção.
8. Clique em **Ver na tabela** em cada produto e confira o destaque temporário no comparativo.
9. Abra e feche as perguntas do FAQ.
10. Preencha o formulário e clique em **Enviar mensagem** para testar a abertura do aplicativo de e-mail.
11. Reduza a largura da tela ou use o modo responsivo do navegador para validar a adaptação em tablet e celular.

Também é possível abrir o projeto com **Live Server** no VS Code.

## Observações importantes

- O projeto foi feito para funcionar como site estático.
- O formulário não salva dados localmente.
- O `mailto` depende de um aplicativo de e-mail configurado no dispositivo.
- O conteúdo comercial, preços, autonomias, endereços e demais dados são fictícios.
- O carrossel, o dropdown de redes, o FAQ e o destaque da tabela funcionam **sem JavaScript**.
- A responsividade foi feita com foco em desktop, tablet e celular.

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
