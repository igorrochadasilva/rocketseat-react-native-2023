# Projeto 1

## Iniciando com React Native

**Introdução**

- Objetivo do módulo é fundamentos.

**O Projeto**

- Projeto I'm here. Aplicação para gerenciar os participantes presentes em eventos, como em palestras e workshop
- Lista de participantes
- Crud de participantes
- Telas de confirmação

**O que é React Native**

- Framework para desenvolvimento multiplataforma para atender IOS e android.
- Comunidade Gigantesca
- Desenvolvida pelo Facebook
- App desktop, Ips, windows, VR podem utilizar react native.

**Quem usa React Native**

- Facebook, Instagram, Oculos, coinbase, shopify, Tableau, Discord, Mercari, Tesla, skype, walmart, salesforce, Vogue.
- O framework é forte no market!

**O que é Expo**

- Pode-se criar um projeto utilizando o Expo ou a CLI.
- Criando com a CLI, é preciso fazer passos a mais, configurações para o projeto.
- Para simular o IOS, somente com Sistema Operacional Macios.
- Para iniciar o projeto com o Expo, basta ter o node instalado.
- Managed workflow: você não tem acesso a pasta ios e android, pois você não consegue tocar em código nativo, apenas o expo, mas caso você precisa fazer configurações
- Bare workflow: há acesso a pasta IOS e android podendo fazer alterações no código nativo do IOS e android

**Questions**

`Assinale a alternativa correta sobre React Native:`

- Com o React Native você consegue manter quase toda a sua aplicação pelo Javascript e manipular código nativo caso necessário.

`Assinale a alternativa incorreta sobre React Native CLI e Expo:`

- A documentação oficial do React Native recomenda apenas a React Native CLI, nem chegando a mencionar o Expo.

`Sobre o Expo, assinale a alternativa correta:`

- Expo tem dois caminhos tradicionais ao criar um projeto: Managed Workflow e Bare Workflow.

## Fundamentos

**Preparando seu Ambiente de Desenvolvimento**

- https://react-native.rocketseat.dev/
- Criando aplicação com Expo maneger
- Instalando seguindo o Expo Managed

**Expo com NPX**

- https://docs.expo.dev
- npx create-expo-app my-project
- Utilizando o npx que é um executador para criar app
- npx create-expo-app nameapp cria o projeto sem perguntar as configs
- npx expo install -> para adicionar algum pacote, library.

**Criando novo projeto**

- expo init imhere --npm
- Com isso é iniciado a criação do projeto especificando o npm para instalar
- Managed Workflow: blank (Typescript) com configuração typescript

Pontos de atenção

- 1. No caminho do usuário e no nome da pasta não utilize caracteres especiais (ex: C:/Área de Trabalho/projeto)
- 2. Evite também espaços em branco. E evite caracteres especiais, porque sempre quebra o build do Gradle no Android. O local mais comum de acontecer isso é no Windows quando a pessoa cria na área de trabalho ou possui um nome com o acento e por algum motivo windows buga e cria usuário dela com acento. (ex: C:/Users/João)
- 3. Não crie o projeto dentro de pastas sincronizadas (ex: OneDrive, Google Drive.)

**Estrutura de pastas e arquivos**

- Estrutura de pastas, assets, node_modules, app, app.jsn, gitnore etc etc.

**Executando o projeto**

- `expo start` para iniciar aplicação.
- Scaneando QRcode para simular pelo próprio celular.

**Funcionamento do React Native**

- Enquanto IOs utiliza Object-C /Switft e Android com java/Kotlin tendo que desenvolver 2 vezes, e fazer a manutenção em ambos
- No React native, ele tem o recurso cross plataform, de modo que o código utilizado no android é o mesmo de IOS
- O javascript gerá um bundle ao qual é disponivel para IOS ou Android, interface declarativa com JSX.

**Refresh e Reload**

- A cada modificação que ocorre na interface, é feita o refresh e reload da aplicação

**Entendendo o JSX**

- React native disponibiliza elementos especificos do contexto mobile para serem renderizados no IOS ou Android

**Entendendo a LogBox**

- Interface que mostra os erros
- Logbox Amarelo cores que não quebram aplicação
- Logbox Vermelha que quebram os elementos
- Key identificador para elementos que auxilia na performance

**Estilizando Elementos**

- Os elementos do react native tem a propriedade `style`, de modo que é possivel utilizar ela para estilização, de modo a definir as regras visuais dentro da propria tag.

**Entendendo densidade de pixel**

- Densidade de Pixel é o numero total de pixel dentro de uma area fixa dentro da tela, ppi.
- Quanto mais proximo, mais importante maior densidade, quanto mais longe, menor densidade.
- Cada ambiente vai lidar com a densidade de pixel de forma automatica

**Utilizando StyleSheet**

- Utilizando o stylesheet para estilização.

**Organizando o projeto**

- Criando pasta `src` e colocar arquivos criado pelo developer
- Criando pasta `home` e arquivos `index.tsx` e `styles.ts`

**Export e Export Default**

- Na exportação sem default é necessário passar o dentro de chaves o conteudo desejado
- No export default não é necessário passar dentro de chaves
- O ideal é fazer importações sem default de modo a deixar consistente a nomenclatura do importe desejado

**Input de dados**

- `TextInput`
- Utilizando o input e vendo suas propriedades para se adequar as necessidades.
- KeyBoardType para tipos de dados que o input irá receber
- Há propriedades que somente estão dispoinveis para IOS ou Android, necessário ver documentação quando surgir dúvida

**Botão de Adicionar**

- `TouchableOpacity`
- Botão de evento de clicks.
- Necessário passar `Text` para inserir o texto dentro do botão

**Criando o Form**

- Criado view para ficar em volta do input e button para ficarem na mesma linha.

**Entendendo Componetização**

- Componentizar tags e blocos de código de modo que possa reaproveitar em outros lugares.
- Reunitilização de código
- Produtividade
- Isolamento de contexto
- Legibilidade do código
- Redução da complexidade
- Arquivos menores
- Padronização do projeto

**Criando Componente Participante**

- Criando componente `Participant` e estilizando.

**Entendendo o Typescript**

- Usar typescript

**Utilizando Propriedades no Componente**

- Criando prop `name` que componente `participant` irá receber.

**Função Remover**

- Adicionando função para remover participante e passando como parametro

**Ativando rolagem na tela**

- Utilizando a `ScrollView` para ativação de rolagem quando se há varios elementos que não cabem em tela

**Lista de participantes**

- Utilizando a `FlatList` de modo que não precisa mais utilizar o map, é legal.

**Entendendo ScrollView e FlatList**

- A scrollView carrega todos os componentes mesmo eles não estando na tela.
- A FlatList só carrega quando é feito o scroll e o componente visivel na tela

**Estilizando a StatusBar**

- Estilizando a `statusBar` que são as informações do celular que ficam em cima.

**Exibindo Alertas**

- Utilizando o `Alert` para apresentar mensagens de confirmação pro usuário.

**Quiz - Fundamentos**

`1. Sobre o Funcionamento do React Native, assinale a alternativa correta:`
R: O JSX é forma que construimos as interfaces de forma declarativa em React Native.

`2. Sobre JSX, é correto dizer que o código abaixo é válido.`
R: Falso

`3. É correto dizer que a forma mais comum de se estilizar componentes em React Native é aplicar o CSS puro assim como fazemos na Web.`
R: Falso
`4. Sobre componentização em React Native, escolha a alternativa incorreta:`
R: Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.

`5. Em React Native temos dois principais tipos de listas: ScrollView e FlatList. Assinale a alternativa correta sobre essas listas:`
R: ScrollView renderiza todos os componentes da lista, mesmo os itens que não estão visíveis em tela ainda.

## Finalizando o App

**Overview dos próximos passos**

**Conceito de Hooks**

- Hooks são funções para serem usadas de acordo com sua necessidade.
- `useState` e `useEffect` são exemplos de hooks
- camelCase é o padrão do nome dos hooks

**Adicionando Participantes**

- Utilizando o `useState` para armazenar o estado dos participantes e listalos

**Entendendo Imutabilidade**

- Entendesse por imutável, algo não esta sujeito a mudar/alterar. É esse conceito que levamos para o estado, pois não conseguimos alterar da maneira tradicional como era feito no javascript antigamente, apenas conseguimos alterar com o método setState.
- Desta maneira vemos quando um componente pode influenciar a alteração na tela

**Salvando participante no estado**

- Criando estado `participantName` e salvando com setParticipantname.
- Alterando variaveis estaticas para state dinamico

**Entendendo o Render**

- Cada componente pode ter sua especialidade de renderizar algo
- 2 razões para iniciar a renderização

1. Quando é a rendddrização inicial do componente.
2. O eestado do componente mudou.

- O rendering é o react chamando seus componentes
- Após renderizar seus componentes, o React modificará o DOM
- Para a renderização inicial o React usará a API DOM para colocar todos os nós DOM criados na tela.
- Para re-renderizações o React aplicará as operações mínimas necessárias (calculadas durante a renderização) para fazer o DOM corresponder á saída de renderização mais recente

**Removendo Participantes**

- Removendo participants filtrando por nome diferente do botão clicado.

**Entendendo Estado assíncrono**

- Pelo fato dos estados serem assíncronos, deve-se tomar cuidado na sequencia da função.

**Entendendo erros em desenvolvimento**

- Dica passar o mouse para mostrar onde está errado e possivel correção.

**Debug pelo console**

- Debugando utilizando o console.
- Passando como se fosse uma etiqueta: `console.log("Valor do nome", name)`
- console.warn variação de aviso
- console.error variaçaõ de erro
- Utilizando o dev menu clicando `m`

**Analisando código com breakpoints**

- Utilizando breakpoints para debugar e encontrar bugs

**Revisando o App**

- Review de app inteiro feito até o momento

**Encerramento**

`Oque é React native`

- Oque é Expo e quem usá o expo.
  `Fundamentos do React Native`
- Criar projeto, estrutura de pastas e arquivos e executar o projeto
- Funcionamento do React Native, refresh e reload, jsx
- Estiizando elementos, Densidade de Pixel, Stylesheet, flex direction
- Organizando o projeto,
- Export e Export Default
- Componentes, TextInput, TouchableOpacity, Criando Componente, Propriedades, StatusBar, Listas, ScrollView e Flatlist.
- Alert
  `Hooks`
- Conceito de hooks
- useStte
- Imutabilidade
- State e TextInput
- Render
- Manipulação de Estados
- Estado Assíncrono

**Quiz - Finalizando o App**

`1. Os Hooks são uma forma de trabalharmos com funções no React em vez de classes. useState e useEffect são exemplos de hooks bem utilizados. Porém, ainda não é possível criar nossos próprios hooks.`
R: Falso.

`2.A imutabilidade no React é muito importante porque se mutarmos diretamente o valor de um estado em vez de substituí-lo por um novo valor, não ocorre corretamente uma nova renderização do seu componente`
R: Verdadeiro

`3. Sobre a renderização no React, assinale a alternativa incorreta:`
R: O React não segue um fluxo definido ao renderizar uma tela, podendo variar bastante as etapas do processo.
