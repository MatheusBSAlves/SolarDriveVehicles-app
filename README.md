# SolarDrive Vehicles

Landing page estatica criada para a empresa ficticia **SolarDrive Vehicles**.
O site apresenta uma linha de veiculos movidos por energia solar, com foco em
mobilidade urbana, sustentabilidade e comparacao simples entre modelos.

## Sobre o projeto

Este projeto foi feito como trabalho academico de landing page. A pagina simula
o site institucional de uma marca brasileira de veiculos solares.

O site apresenta:

- banner principal de apresentacao da marca;
- carrossel de produtos feito somente com HTML e CSS;
- tabela comparativa dos modelos;
- destaque do modelo selecionado ao clicar em "Ver na tabela";
- secao de diferenciais;
- secao de missao e equipe;
- FAQ com perguntas frequentes;
- formulario de contato usando `mailto`;
- menu de redes sociais no cabecalho.

## Tecnologias usadas

- HTML5;
- CSS3;
- Google Fonts;
- SVG inline para os icones das redes sociais;
- imagens locais na pasta `assets/img`.

O projeto **nao usa JavaScript**, backend ou banco de dados.

## Estrutura de arquivos

```text
SolarDriveVehicles-app/
|-- index.html
|-- README.md
`-- assets/
    |-- css/
    |   |-- index.css
    |   `-- variaveis.css
    `-- img/
        |-- logo-colorida.png
        |-- scooter.png
        |-- sedan.png
        |-- suv.png
        `-- imagens da equipe e do banner
```

## Partes principais

### Cabecalho

O cabecalho fica fixo no topo da pagina e possui links internos para as secoes
principais. Tambem possui um item chamado **Redes sociais**.

Ao passar o mouse ou navegar por teclado nesse item, aparece um dropdown com
icones que levam para:

- X/Twitter;
- Facebook;
- Instagram.

### Produtos

A area de produtos tem um carrossel com tres modelos:

- SolarDrive Scooter One;
- SolarDrive Sedan S;
- SolarDrive SUV Terra.

O carrossel funciona com `input type="radio"` e `label`, sem JavaScript.

### Tabela comparativa

A tabela mostra preco inicial, autonomia, uso ideal e descricao dos modelos.
Quando o usuario clica em **Ver na tabela**, a pagina vai para o comparativo e
destaca o modelo escolhido.

### FAQ

O FAQ usa as tags nativas `<details>` e `<summary>`, permitindo abrir e fechar
as respostas sem precisar de script.

### Contato

O formulario usa `mailto:contato@solardrive.com.br`. Ao enviar, o aplicativo de
e-mail do usuario e aberto com a mensagem pronta para revisao.

## Como abrir o site

1. Baixe ou mantenha todos os arquivos na mesma pasta do projeto.
2. Abra o arquivo `index.html` em um navegador.
3. Navegue pelo menu superior para testar as secoes.
4. Passe o mouse em **Redes sociais** para testar o dropdown.
5. Use os botoes do carrossel e os links **Ver na tabela**.
6. Abra as perguntas do FAQ.
7. Teste o formulario de contato.

Tambem e possivel abrir com a extensao **Live Server** do VS Code.

## Observacoes

- O site foi desenvolvido para desktop e telas menores.
- O codigo usa tags semanticas como `header`, `nav`, `main`, `section`,
  `article`, `figure`, `table`, `address` e `footer`.
- As cores e fontes principais ficam organizadas em `assets/css/variaveis.css`.
- O arquivo `assets/css/index.css` concentra o estilo das secoes.
- Como nao ha backend, o formulario nao salva dados.

## Autores

- Chris
- Matheus Berno
- Erick Ciribelli
- Cayke
- Guilherme
