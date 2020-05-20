# POKÉMON

**Pokémon** é um anime criado nos anos de 1995 que fez muito sucesso entre crianças e jovens durante a exibição de todas as suas temporadas. A partir de então, surgiu o jogo Pokémon GO, um aplicativo mobile em que você pode visualizar e capturar pokémons em tempo real! É claro que tornou-se um sucesso entre diferentes faixas etárias. Porém, cabe aqui a ressalva que, após 13 temporadas, a série já apresentou mais de 800 pokémons! Todos divididos entre 7 gerações, cada um com uma altura, peso e tipo diferentes. Como armazenar as características de cada um, incluindo suas fraquezas e evoluções, por exemplo?  
Com essa finalidade, criou-se o **"Pokémon"**, onde você pode ter acesso a diversas informações de todos os 151 pokémons da geração Kanto. [Clique aqui](https://amandamanco.github.io/SAP004-data-lovers/) e confira a aplicação.


## Definição do Produto

Existem diversas características que você pode ter sobre um pokémon e informações relevantes para enfrentar uma batalha no jogo Pokemon GO. Pensando nisso, foi desenvolvido um tipo de _"pokedex"_, um local onde você pode facilmente pesquisar por cada pokémon e ter acesso a todas informações que você julgar necessárias.  
Porém, importante a ressalva de que o projeto foi desenvolvido para atender tanto ao público que joga Pokemon GO como para aqueles que assistiram e acompanharam o anime Pokemon. De acordo com pesquisa realizada, verificou-se que 94% das pessoas que responderam o referido formulário afirmaram ter assistido o anime, enquanto 84% afirmaram terem jogado Pokemon GO.

| ![PESQUISA ASSISTIRAM ANIME](/src/assets/PesquisaAnime.png) |
| :---------------------------------------------------------: |
|       _Pesquisa sobre quem assistiu o anime Pokemon_        |

| ![PESQUISA JOGARAM](/src/assets/PesquisaJogador.png) |
| :--------------------------------------------------: |
|        _Pesquisa sobre quem jogou Pokemon GO_        |

Foi através dessa mesma pesquisa que a funcionalidade de ordem alfabética (História do Usuário - Terceira História) foi tida como essencial e implementada no projeto.

| ![PESQUISA ORDENAGEM](/src/assets/PesquisaOrdenagem.png) |
| :------------------------------------------------------: |
|           _Pesquisa sobre forma de ordenagem_            |

## Histórias do Usuário

Pensando no Produto Mínimo Viável , as _histórias do usuário_ foram separadas em 5 (cinco) partes diferentes:

- Primeira História: desenvolvimento da página inicial onde seria exibido na tela a listagem com todos os 151 pokémons da primeira geração (Kanto), juntamente com o seu número de _pokedex_, seu tipo e seu nome;
- Segunda História: desenvolvimento da possibilidade de filtrar os pokémons de acordo com todos os 15 tipo disponíveis e mostrar ao usuário a lista filtrada que este desejar;
- Terceira História : implementação da funcionalidade de ordenação, onde tanto a lista geral de pokémons como a lista filtrada pelo usuário poderiam ser ordenadas de acordo com o número da _pokedex_, ordem alfabética de A-Z e de Z-A;
- Quarta História: inicialmente, a página inicial seria dividida em duas (uma com a listagem geral dos pokémons e outra para cada pokemon, com suas características principais). Porém, durante o desenvolvimento, percebeu-se que as necessidades do usuário seriam melhores atendidas se essas informações estivessem na mesma página da listagem geral, sendo implementado o componente de modal.
- Quinta História: implementação do cálculo agregado, onde seria informado ao usuário a quantidade (em porcentagem) que o tipo filtrado por este corresponderia ao total de pokémons da geração Kanto.

Dessa forma, todas as necessidades do usuário seriam atendidas, sendo que em cada sprint uma usabilidade poderia ser usufruída por este.

# Fluxograma

Tendo em vista todos os passos que o usuário poderia ter dentro da aplicação, foi desenvolvido o seguinte fluxograma:

| ![FLUXOGRAMA](/src/assets/Fluxograma.jpeg) |
| :----------------------------------------: |
|                _FLUXOGRAMA_                |

Uma vez que o usuário tem como possibilidade filtrar e ordenar a lista de pokémons, o fluxograma foi importante no momento do desenvolvimento, orientando todas as funções que seriam utilizadas e toda a interação com o DOM.

# Protótipos

Pensando nas necessidades do usuário e no layout da listagem de 151 pokémons, idealizou-se os protótipos abaixo, onde os cards com as informações básicas dos pokémons (número, tipo e nome) seriam dispostos na página inicial, como uma logo e dois botões, onde é possível filtrar e ordenar:

| ![Rascunho - Amanda](/src/assets/RascunhoAmanda.jpeg) |
| :---------------------------------------------------: |
|                  _Rascunho - Amanda_                  |

| ![Rascunho - Marcella](/src/assets/RascunhoMarcella.jpg) |
| :------------------------------------------------------: |
|                  _Rascunho - Marcella_                   |

| ![Teste de Usabilidade](/src/assets/TestedeUsabilidade.jpeg) |
| :----------------------------------------------------------: |
|             _Rascunho para Teste de Usabilidade_             |

Como já foi falado anteriormente, no início do projeto foram idealizadas duas páginas: a página inicial e a página com as características de cada pokémon. Abaixo podem ser observados o protótipo de baixa fidelidade seguido pelo protótipo de alta fidelidade, ainda com a segunda página `html`:

| ![Protótipo de Baixa Fidelidade - HOMEPAGE](/src/assets/BaixaFidelidade01.jpg) |
| :----------------------------------------------------------------------------: |
|                   _Protótipo de Baixa Fidelidade - HOMEPAGE_                   |

| ![Protótipo de Baixa Fidelidade - Características](/src/assets/BaixaFidelidade02.jpeg) |
| :------------------------------------------------------------------------------------: |
|                   _Protótipo de Baixa Fidelidade - Características_                    |

| ![Protótipo de Alta Fidelidade - HOMEPAGE](/src/assets/AltaFidelidade1.png) |
| :-------------------------------------------------------------------------: |
|                  _Protótipo de Alta Fidelidade - HOMEPAGE_                  |

| ![Protótipo de Alta Fidelidade - Características](/src/assets/AltaFidelidade2.png) |
| :--------------------------------------------------------------------------------: |
|                  _Protótipo de Alta Fidelidade - Características_                  |

Após a finalização do projeto, foi implementada a modal, tendo como resultado o seguinte layout:

| ![Protótipo de Alta Fidelidade - HOMEPAGE](/src/assets/Pronto1.jpeg) |
| :------------------------------------------------------------------: |
|              _Protótipo de Alta Fidelidade - HOMEPAGE_               |

| ![Protótipo de Alta Fidelidade - Características](/src/assets/Pronto2.jpeg) |
| :-------------------------------------------------------------------------: |
|              _Protótipo de Alta Fidelidade - Características_               |

# Subir e Rodar

Primeiro, é necessário clonar o repositório pelo GitHub:
`git clone https://github.com/amandamanco/SAP004-data-lovers.git`

Para rodar o projeto na sua máquina, basta ter o Node.js instaladado e inserir o seguinte comando no terminal:
`npm start`

Se deseja rodar os testes, insira o seguinte comando:
`npm run test`
