# Projeto 2

## Estrutura da aplicação

**Introdução**

**Conhecendo o projeto**

- Projeto pra juntar pessoas para jogar games similares que os usuários gostam.
- Layout no figma
- Font Roboto
- Cores definidas
- Criar novas turmas
- Navegação entre telas
- Armazenamento das informações
- Adicionar pessoas que fazem parte da turma e separação entre time, remoção de turma inteira.

**Figma: Ignite Teams**

**Criando o projeto**

- Iniciando proejto com: `expo init igniteteams`

**Organizando e executando o projeto**

- Start aplicação: `expo start`

**Imagens para diferentes densidades de tela**

- Download de imagens para pasta assets

**Path mapping**

- Utilizando o babel-plugin-module-resolver para deixar as importações mais dinamicas e flexiveis.
  `npm install --save-dev babel-plugin-module-resolver`

**Proximos Passos**

**Quiz - Estrutura da aplicação**

`1. Assinale a alternativa correta sobre como utilizar imagens para diferentes densidades de pixel em React Native:`
R: É preciso salvar as imagens no padrão logo.png, logo@2x.png, logo@3x.png e basta importar/utilizar apenas a logo.png, o React Native faz o ajuste sozinho.

`2. Qual a finalidade do Path Mapping?`
R: Criar alias para pastas e facilitar as importações

## CSS-in-JS

**Proposta**

- Vamos utilizar Styled components: `npm i styled-components`

**Utilizando Styled Components**

- Instalando styled components: `npm i styled-componets`
- Instalando types: `@types/styled-components` e `@types/styled-components-react-native`

**Alias de Importação**

- `import * as S from './styles` de modo a passar o S na frente e chamando o componente

**Design System & Style Guide**

- Nessa aula teórica iremos apresentar o que são Design System e Style Guide e como iremos aplicar no nosso código com auxílio do Styled Components o Style Guide do Figma do nosso projeto.

**Definindo o tema da aplicação**

- Nessa aula prática você irá criar o arquivo do tema e configurá-lo no Styled Components para ser acessível em toda a sua aplicação. Para isso, criamos um arquivo @theme/index.ts com os tokens do Style Guide do nosso Figma. Na sequência repassamos essas informações para o ThemeProvider do Styled Components que envolve toda nossa aplicação.

**Utilizando tema**

Nessa aula prática você irá utilizar o tema configurado anteriormente na aplicação e configurar o Typescript para sugerir o autocomplete baseado nos tokens do nosso tema.

No primeiro caso desestruturamos a variável theme diretamente dentro da estilização dos componentes para acessar os tokens do tema.

No segundo caso criamos uma pasta @types com o arquivo styled.d.ts que estende a tipagem do nosso tema para o tema padrão do Styled Components

**Fontes personalizadas**

Nessa aula prática você irá aprender a configurar fontes personalizadas no seu projeto. Para isso, utilizaremos fontes do Expo que disponibilizam basicamente todas as fontes Google. Iremos instalar e configurar apenas a Roboto com os pesos regular e bold.

Por fim, iremos lidar com o assincronismo do carregamento de fontes exibindo um componente de carregamento do próprio React Native: o ActivityIndicator.

- `expo install expo-font @expo-google-fonts/[font-name]`

**Componente de Loading**

Nessa aula prática iremos criar um componente Loading para nosso ActivityIndicator a fim de manter o padrão de estilo da nossa aplicação. Além disso, você irá aprender a como configurar valores de outros atributos (além do style) diretamente no Styled Components, como é o caso do color do nosso ActivityIndicator.

**Estilizando a StatusBar**

Nessa aula prática você irá estilizar a StatusBar para que ela fique mais legível no tema da nossa aplicação.

**Criando Componente Header**

Nessa aula prática iremos começar a criar o componente Header e aprender a trabalhar com imagens na nossa aplicação. Utizaremos o componente Image para exibir as imagens do nosso logo presente na pasta assets.

Para isso, basta importarmos nosso arquivo png e repassar para o Image pelo atributo source. Por fim, iremos configurar o Typescript para aceitar arquivos png por meio do png.d.ts.

**Biblioteca de ícones**

Nessa aula prática você irá aprender a trabalhar com ícones no React Native. Para esse projeto utilizaremos os ícones da Phosphor. Além disso, iremos apresentar condicionalmente no nosso componente Header o botão de voltar dependendo do valor da propriedade showBackButton.

`npm install --save phosphor-react-native`
`npx expo install react-native-svg`

**Criando componente Highlight**

Nessa aula prática iremos exercitar o fundamento de componentização ao criar o componente Highlight para reaproveitar a estrutura de título e subtítulo presente em todas as páginas do nosso projeto.

**Criando Componente GroupCard**

Nessa aula prática você irá criar mais um componente, dessa vez o GroupCard, porém iremos nos aprofundar em alguns pontos como mesclar múltiplas tipagens, pegar e aplicar todas as propriedades restantes com os operadores rest e spread e escolher diferentes tipos de estilo para os ícones da Phosphor.

**Resolvendo conflito de tipagem do styled component**

Nessa aula prática vamos aprender como podemos resolver futuros conflitos de tipagem que possam vir a acontecer entre as tipagens do React e as tipagens do Styled Components, utilizando o overrides no caso de utilizarmos o npm e o resolutions caso de utilizarmos yarn.

**Listando grupos**
Nessa aula prática iremos começar a estruturar nossa listagem de turmas na tela Groups. Criaremos um estado para armazenar os nome das turmas e uma FlatList para renderizar todas as turmas utilizando nosso componente GroupCard.

**Componente List empty**

Nessa aula prática você irá aprender a apresentar em tela um componente caso a listagem esteja vazia. Para isso, trabalharemos com o atributo ListEmptyComponent da FlatList, repassando para ela o componente que iremos criar: ListEmpty.

**Criando Componente Button**

Nessa aula prática iremos criar o componente Button para reaproveitar na 3 telas da nossa aplicação toda a estrutura e estilização dos botões. Além disso, iremos nos aprofundar um pouco mais no Typescript ao aprender sobre literal types e union types.

**TypeScript Translator**

- Instalando extensão `typescript translator`

**Criando interface NewGroup**
Nessa aula prática você irá criar a segunda tela da nossa aplicação: cadastro de novas turmas. Para isso, iremos criar a screen NewGroup e reaproveitar diversos componentes das aulas anteriores como Header,Hightlight e Button.

**Criando Componente Input**

Nessa aula prática iremos começar a criar o último componente que faltou na tela NewGroup: o Input.

**Estilizando o Placeholder**

Nessa aula prática você irá finalizar a criação do componente Input ao definir e estilizar o Placeholder. Além disso, você aprenderá uma forma de utilizar o tema do Styled Components direto no arquivo index.tsx com auxílio do hook useTheme.

**Utilizando o CSS Helper**

Nessa aula prática iremos fazer uma refatoração das estilizações no Styled Components onde utilizamos múltiplas vezes o tema no componente. Com o auxílio do helper css, conseguimos reaproveitar a variável theme nas estilizações.

**Criando a Interface Players**

Nessa aula prática você irá começar a criação da tela Players, que será responsável pela listagem e cadastro dos jogadores em cada time.

**Criando componente Button Icon**

Nessa aula prática iremos começar a desenvolver o componente ButtonIcon, aprendendo também a utilizar a biblioteca expo/vector-icons, criando um componente estilizado através da mesma.

**Deixando o ícone dinâmico**

Nessa aula prática iremos criar a lógica que permite deixar o botão de forma dinâmica, aprendendo como podemos repassar a listagem de ícones da biblioteca expo/vector-icons, como propriedade, além de deixar o type dinâmico através de propriedades.

**Componente Filter**

Nessa aula prática iremos criar o componente Filter e junto com ele iremos aprender como adicionar estilos condicionais com o “css helper”, para indicar qual filtro está ativo no momento.

**Listando os filtros**

Nessa aula prática iremos aprender como deixar a FlatList no sentido horizontal, adicionando a listagem de filtros na tela Players. Também iremos aprender como exibir a quantidade em tela baseado no tamanho de um Array.

**Criando o Componente PlayerCard**

Nessa aula prática iremos criar o componente PlayerCard, que será responsável por exibir as informações dos membros de um uma turma. Nessa aula iremos aprender como podemos reutilizar componentes dentro de outros, utilizando o componente ButtonIcon junto com o componente PlayerCard.

**Finalizando a lista de Players**

Nessa aula prática iremos finalizar a listagem de players, adicionando o componente ListEmpty, para indicar quando não possuem membros na lista. Também iremos aprender como adicionar estilos adicionais baseado em se a lista está vazia ou não e a remover o indicador de rolagem na listagem.

**Recap**

**Quiz - CSS-in-JS**

`1. CSS-in-JS é a estratégia de estilo pela qual o JavaScript é usado para estilizar componentes.`
R: Verdadeiro

`2. Assinale abaixo a alternativa que não corresponde a uma característica do Styled Components`
R: É possível personalizar apenas as estilizações dos componentes (prop style) via styled, ou seja, não é possível configurar outras propriedades/atributos do componente.

`3.Escolha a alternativa abaixo que corretamente estiliza uma View com espaçamento interno de 20 e fundo vermelho.`
R: styled.View`  padding: 20;
  background-color: red;`;

## Navegação

**Introdução**

Nessa aula introdutória explicamos como faremos a navegação na nossa aplicação, vamos explicar que temos algumas estratégias de navegação, mas que focaremos em uma só nessa aplicação que será desenvolvida.

**Tipos de Navegação**

Nessa aula introdutória explicamos um pouco sobre as estratégias de navegação mais utilizadas, sendo elas a Stack Navigator, Tab Navigator e a Drawer Navigator. Explicando as principais diferenças entre elas.

**Instalando Stack Navigator**

Nessa aula prática vamos instalar a lib que utilizaremos para controlar a navegação da nossa aplicação, a react-navigation. Iremos instalar também a lib que controla a navegação por pilha que é a react-navigation/native-stack.

`npm install @react-navigation/native`

`expo install react-native-screens react-native-safe-area-context`

`npm install @react-navigation/native-stack`

**Implementando Stack Navigator**

Nessa aula prática iremos aprender como criar as rotas na nossa aplicação, utilizando o Stack Navigator, iremos também aprender como organizar as rotas, para que possamos facilitar a criação de várias camadas de rotas.

**Estrutura de navegação**

Nessa aula prática vamos aprender a definir qual arquivo de rotas será renderizada pela aplicação. Vamos entender como o NavigationContainer compartilha as nossas rotas e propriedades de navegação para toda a aplicação.

Além disso, vamos ver como remover o “header” padrão do Stack Navigator.

**Tipando as rotas**

Nessa aula prática vamos aprender como definir uma tipagem global para as rotas da aplicação, entendendo como definirmos quais rotas recebem ou não parâmetros e qual a estrutura dos parâmetros.

**Navegando pela aplicação**

Nessa aula prática vamos aprender como navegar por nossa aplicação, utilizando duas estrategias de navegação.

A primeira é utilizando o navigation através da propriedades que o NavigationContainer compartilha com a aplicação.

A segunda é utilizando o useNavigation, sendo essa estratégia que iremos utilizar durante o desenvolvimento da aplicação.

**Implementando o voltar**

Nessa aula prática vamos aprender como podemos utilizar o useNavigation para implementarmos a função de navegar para a tela anterior e como voltarmos para o início de pilha de forma mais prática.

**Utilizando a SafeAreaView**

Nessa aula prática vamos aprender como trabalhar somente na parte segura da tela do nosso dispositivo, utilizando o componente SafeAreaView que importamos da lib react-native-safe-area-context.

**Passando parâmetros pela rota**

Nessa aula prática vamos aprender como podemos repassar parâmetros entre as rotas e como recuperar esses parâmetros utilizando o hook useRoute.

Além disso iremos aprender como podemos tipar os parâmetros que foram recuperados das rotas.

**Prevenindo Glitch na navegação**

Nessa aula prática vamos aprender como prevenir que a tela da aplicação apareça um glitch branco no momento da animação de navegação.

**Quiz - CSS-in-JS**

`1. Qual a melhor descrição para identificar o Stack Navigator?`
R: Ao abrir uma nova tela, essa nova tela é colocada no topo da pilha de navegação e ao voltar telas, as mesmas são removidas dessa pilha.

`2. Ao “tipar” as rotas, você tem a vantagem de no momento da navegação saber se uma rota recebe parâmetros ou não e qual o formato dos parâmetros.`
R: Verdadeiro

`3.Escolha a alternativa abaixo que corretamente estiliza uma View com espaçamento interno de 20 e fundo vermelho.`
R: O NavigationContainer é um contexto que compartilha com nossa aplicação, todas as rotas e propriedades de navegação.

# Local Storage

**Introdução**

Nessa aula introdutória fazemos um overview de tudo que foi desenvolvido atá agora na aplicação e falamos sobre as novas funcionalidades que vamos desenvolver.

**Compreendendo o Prop Drilling**

Nessa aula introdutória vamos aprender o que é o Prop Drilling e entender quais estratégias podemos utilizar para substitui-lo.

**Entendendo o Async Storage**

Nessa aula introdutória vamos entender como funciona o Async Storage e como ele pode nos ajudar na hora de persistir dados no dispositivo do usuário.

**Adicionando Async Storage**

Nessa aula prática vamos aprender com o adicionar o Async Storage na nossa aplicação.

`expo install @react-native-async-storage/async-storage`

**Armazenando novos grupos**

Nessa aula prática teremos nosso primeiro contato com o Async Storage na prática, aprendendo como salvar dados no dispositivo e entendendo como trabalhar de forma mais organizada com leitura e escrita no Async Storage.

**Obtendo os grupos**

**Identificando o foco na tela**

**Criando uma classe de erros personalizada**

**Tratando exceções**

**Abrindo turmas**

**Armazenando Players**

**Listando Players**

**Carregando Players pelo Grupo e Time**

**Filtrando por time**

**Melhorando a usabilidade**

**Removendo Player do Grupo**

**Remover Grupo**

**Recap**

**Refactor do Loading**

**Encerramento**

**Quiz - Local Storage**
