# Projeto 3

## Estrutura da aplicação

**Introdução**

**Conhecendo o projeto**

Nessa aula você será apresentado ao projeto desse módulo: Ignite Gym. A ideia dessa aplicação é termos um app onde podemos consultar exercícios de academia. Nesse aplicativo vamos ter dois tipos de navegações, uma navegação em pilha para as rotas publicas e uma navegação em abas, na parte inferior para as rotas privadas. Para estilizar essa aplicação utilizaremos o NativeBase, uma biblioteca de componentes estilizados para facilitar na criação do app.

**Figma: Ignite Gym**

**Mapeamento das pastas**

Nessa aula prática, vamos iniciar o projeto com o Expo Managed, junto com isso, vamos configurar o mapeamento das pastar utilizando a estratégia de Path Mapping, que aprendemos no módulo anterior.

**Fonte da aplicação**

Nessa aula prática vamos adicionar a fonte personalizada que iremos utilizar na aplicação, fazendo o carregamento da fonte no nosso App.tsx.

A fonte utilizada na aplicação será a Roboto.

`npx expo install expo-font @expo-google-fonts/inter`

**Personalizando a StatusBar**

Nessa aula prática vamos configurar o componente de StatusBar para seguir a linha visual da aplicação.

Utilizamos algumas propriedades do componente para deixar a StatusBar transparente e com o estilo claro.

**Assets da aplicação**

Nessa aula prática vamos acessar a pasta de assets, com as imagens que iremos utilizar em toda nossa aplicação, adicionando a mesma dentro do projeto.

**Quiz - Estrutura da aplicação**

`1. O Path Mapping é uma estratégia que ajuda a simplificar as importações, evitando aninhamentos muito grandes de ../ nos arquivos.`
R: true

`2. Ao trabalhar com o Expo Font, temos acesso às diversas fontes do Google e funcionalidades que facilitam o trabalho e configuração delas no projeto, como o hook useFonts:`
R: true

## Component Library

**Proposta**

Nessa aula introdutória vamos fazer um pequeno overview do que construímos no primeiro cluster, além de conhecermos um pouco sobre a Component Library que utilizaremos para desenvolver as telas e componentes da aplicação que é o NativeBase. Vamos também conhecer algumas vantagens do utilizar o NativeBase para construção de interfaces.

**Component Library**

Nessa aula vamos conhecer e navegar pelo NativeBase. Vamos conhecer os tipos de componentes de essa Component Library nos oferece e como podemos customizar conforme precisarmos.

`https://nativebase.io/`

`npm install native-base`

**Instalando o NativeBase**

Nessa aula prática vamos aprender como podemos instalar o NativeBase na nossa aplicação, para isso existem duas opções de instalação. Vamos ver como podemos iniciar um novo projeto já com o NativeBase instalado e vamos aprender como adicionar o NativeBase em um projeto já existente, que será a opção que iremos utilizar.

**Utilizando NativeBase**

Nessa aula prática vamos criar nosso primeiro componente utilizando o NativeBase, vamos criar o componente Loading, com ele vamos entender os conceitos inicias para podermos construir a aplicação utilizando essa Component Library.

**Customizando o tema default**

Nessa aula prática vamos aprender como podemos modificar o tema padrão do NativeBase, para que possamos se adequar a identidade visual da nossa aplicação.

**Imagem de Background**

Nessa aula prática vamos dar início a tela de SignIn. Vamos aprender como podemos adicionar uma imagem como background da nossa interface utilizando o componente Image do NativeBase. Vamos também cria a tipagem de imagens png.

**Utilizando SVG**

Nessa aula prática vamos adicionar a logo da aplicação na interface de SignIn e com isso aprender como podemos utilizar ícones no formato svg na nossa aplicação com a mesma sintaxe de componentes. Vamos aprender também como podemos criar uma tipagem global para nosso arquivos SVG.

`https://github.com/kristerkari/react-native-svg-transformer`

**Componente Heading**

Nessa aula prática vamos utilizar o componente Heading do NativeBase, responsável pelo títulos da aplicação.

**Componente de Input**

Nessa aula prática vamos iniciar nosso componente de Input, nesse ponto vamos aprender como podemos “renomear” componentes utilizando alias para evitar conflitos entre nome de componentes criados por nós e componentes de uma lib.

**Estilizando o focus no Input**

Nessa aula prática vamos aprender como podemos estilizar o interação \_focus de um input do NativeBase. Vamos aprender como deixar o \_focus estilizado utilizando uma borda.

**Finalizando os Inputs**

Nessa aula prática vamos dar alguns retoques finais nas estilizações dos inputs. Vamos adicionar também algumas propriedades que irão ajudar na experiência do usuário e na acessibilidade da aplicação, como o keyboardType e o autoCaptalize e o secureTextEntry.

**Componente Button**

Nessa aula prática vamos iniciar o nosso componente Button. Nessa parte vamos ver como podemos ter todas as propriedades de um botão do NativeBase e adicionar novas propriedades como o title.

Vamos também estilizar nosso botão para ficar com o tema da nossa aplicação.

**Utilizando Variantes**

Nessa aula prática vamos aprender como podemos alterar os estilos do nosso botão como cor de fundo, borda e cor de texto, baseados em variantes do NativeBase. Vamos criar uma variação de botão outline.

**Restringindo as variantes**

Nessa aula prática vamos aprender como podemos restringir a utilização da variantes que criamos, para que fique mais fácil identificar quais tipos de variantes podemos utilizar na nossa aplicação, que são elas a solid e a outline.

**Finalizando a SignIn**

Nessa aula prática vamos finalizar a tela de SignIn, adicionado alguns textos que estão faltando.

Vamos também adcionar uma ScrollView do NativeBase por volta de todos os componentes para melhorarmos a experiência do usuário quando o teclado estiver aberto.

**Criando a SignUp**

Nessa aula prática vamos criar a tela de SignUp reaproveitando a tela de SignIn, aproveitando toda a estrutura e somente adicionando o input de nome, alterando o título da página e os textos dos botões

**Quiz - Component Library**

`1. Sobre a component Library NativeBase, assinale a alternativa correta:`
R: É uma biblioteca de componentes que disponibiliza diversos componentes comuns no dia a dia do desenvolvedor e que segue o princípio do utility first.

`2. Diferentemente do Styled Components, o NativeBase não disponibiliza um Provider para envolver toda a aplicação e assim fornecer a todos os componentes filhos o tema.`
R: Falso

`3. Sobre NativeBase, é correto dizer que o código abaixo é válido e representa um ícone de carregamento verde centralizado na tela do`
R: Verdadeiro

`4. O NativeBase disponibiliza um tema padrão com diversas predefinições para acelerar o desenvolvimento. Escolha abaixo a alternativa`
R: Imagens

`5. Além de componentes clássicos como Text e Image, o NativeBase busca fornecer outros componentes como Center e VStack para auxiliar o desenvolvedor na estrutura do layout.`
R: Verdadeiro

## Rotas Publicas

**Proposta**

Nessa aula introdutória vamos fazer um racap das telas que já criamos na aplicação, vamos também explicar como vamos poder criar rotas onde o usuário poderá navegar sem precisar estar logado na aplicação

**Instalando Stack Navigator**

Nessa aula prática vamos entender como funcionarão a navegação entre as telas de SignIn e SignUp. A estratégia de navegação para essas duas rotas sela o Stack Navigator e nessa aula iremos fazer a instalação da lib @react-navigation/native-stack.

`npm i @react-navigation/native`
`npx expo install react-native-screens react-native-safe-area-context`
`npm install @react-navigation/native-stack`

**Criando as Rotas**

Nessa aula prática vamos criar as rotas que o usuário tem acesso sem estar logado na aplicação. Vamos utilizar o createNativeStackNavigator para criar o componente AuthRoutes onde ficarão nossas telas SignIn e SignUp.

**Tipando as Rotas**

Nessa aula prática vamos aprender a como tipar as rotas da nossa aplicação, separando essas tipagens de acordo com o contexto de rotas em que estamos trabalhando.

**Criando o contexto de navegação**

Nessa aula prática iremos criar o componente Routes que ficará responsável por fazer o controle de qual contexto de rotas serão exibidas para o usuário.

**Removendo o Header**

Nessa aula prática vamos remover o header padrão que é adicionado nas rotas quando utilizamos a estratégia de navegação em pilha.

**Modificando o tema da navegação**

Nessa aula prática vamos aprender como podemos editar o tema padrão de navegação do React Navigation. Vamos repassar a cor de background padrão da nossa aplicação para o background padrão do tema padrão de navegação utilizando o hook useTheme do NativeBase.

**Aplicando navegação de autenticação**

Nessa aula prática vamos implementar a navegação entras que estão no contexto de autenticação. Vamos navegar da tela de SignIn para a tela de SignUp e vamos implementar a função de voltar(goBack) entre as telas.

Vamos aprender como podemos definir a tipagem de rotas de acordo com as rotas que estamos trabalhando, informando para o useNavigation as tipagens de rota.

**Definindo a imagem padrão**

Nessa aula prática vamos informar a imagem que será definida por padrão para o componente Image do NativeBase, através da propriedade defaultSource, isso fará com que a imagem seja carregada de forma mais rápida.

**Quiz - Rotas Públicas**

`1. Dado a estrutura do projeto, teremos que trabalhar com dois fluxos: rotas públicas (para usuários não autenticados) e rotas privadas (para usuários autenticados). Na primeira, serão acessíveis às telas de login e cadastro. Já na segunda, o usuário poderá acessar a Home, histórico, perfil e tela de exercício.`
R: Verdadeiro

`2. Assinale abaixo a alternativa incorreta sobre a estrutura utilizada nas rotas públicas durante o projeto:`
R:Para que o cabeçalho não apareça no topo das telas, definimos a propriedade invisibleHeader: true na screenOptions do navegador.

`3. O React Navigation disponibiliza um NavigationContainer que é responsável por diversas questões da navegação, sendo uma delas o tema. Assinale abaixo a alternativa que corretamente aplica o tema padrão, mas alterando a cor do background das telas para vermelho:`
R:
`
export function Routes() {
const theme = DefaultTheme;
theme.colors.background = 'red';

return (
<NavigationContainer theme={theme}>
<AppRoutes />
</NavigationContainer>
)
}`

## Rotas Privadas

**Proposta**

**Criando a estruturas das interfaces do App**

Nessa aula você será apresentado à estrutura do app nas rotas privadas, ou seja, quando o usuário estiver logado. Serão criados rascunhos das 4 telas desse fluxo: Home, History, Profile e Exercise.

**Instalando Bottom Navigator**

Nessa aula você irá instalar o Bottom Tab Navigator da lib React Navigation. Com esse navegador será implementada a navegação por abas na aplicação.

`npm install @react-navigation/bottom-tabs`

**Criando rotas do App**

Nessa aula prática você irá inicializar o Bottom Tab Navigator com as 4 telas criadas anteriormente: Home, History, Profile e Exercise.

**Utilizando o Bottom Tab**
Nessa aula você irá aplicar o AppRoutes na aplicação, permitindo assim a visualização da navegação por abas do Bottom Tab Navigator.

**Tipando as rotas do App**

Nessa aula prática iremos criar as tipagens do AppRoutes assim como fizemos no cluster anterior para o AuthRoutes.

**Removendo o Header**

Nessa aula você irá começar a estilizar o Bottom Tab Navigator. A primeira alteração que iremos fazer é remover o Header das telas utilizando a prop headerShown das screenOptions.

**Removendo a label do menu**
Nessa aula prática iremos remover a label da tabBar utilizando a propriedade tabBarShowLabel da screenOptions.

**Alterando os ícones da Bottom Navigator**

Nessa aula iremos continuar a estilização da Bottom Tab Navigator ao implementar os ícones na aplicação. Iremos utilizar os svgs já presentes na pasta assets e aplicá-los na tabBar por meio da prop tabBarIcon.

**Estilizando menu ativo e inativos**

Nessa aula prática você irá alterar as cores das abas ativas e inativas da tabBar por meio das props tabBarActiveTintColor etabBarInactiveTintColor.

**Estilizando a Bottom Navigator**

Para finalizar a estilização da tabBar, iremos aplicar um estilo dependente da plataforma (Android ou iOS) e remover a aba Exercise da tabBar.

**Recap do App Routes**

Nessa aula de revisão iremos repassar por todas as etapas de construção do AppRoutes, desde a definição das rotas até a estilização da tabBar.

**Quiz - Rotas Privadas**

`1.Assinale abaixo a alternativa incorreta sobre a estrutura utilizada nas rotas privadas durante o projeto:`
R: O navegador escolhido foi o Bottom Tab Navigator da lib React Navigation. Esse navegador possui uma estrutura em menu lateral.

`2.O Bottom Tab Navigator já vem com algumas definições por padrão, como ícones e labels. Escolha a opção que não corresponde a uma maneira de personalizar esses padrões:`
R: O Bottom Tab Navigator já vem com algumas definições por padrão, como ícones e labels. Escolha a opção que não corresponde a uma

## Finalizando as interfaces

**Proposta**

Nessa aula introdutória vamos fazer um recap da criação de rotas da aplicação e vamos falar sobre a finalizar as interfaces que restam na aplicação

**Posicionando na vertical e horizontal**

Nessa aula prática vamos desenvolver o componente HomeHeader, junto com a criação desse componente vamos aprender como podemos posicionar elementos em linha (horizontal) utilizando o HStack e elementos em colunas (vertical) utilizando o VStack.

**Estilizando o HomeHeader**
Nessa aula prática vamos criar a estilização do componente HomeHeader adicionando as propriedades no NativeBase.

**Componente UserPhoto**
Nessa aula prática vamos criar um componente responsável por exibir a o foto do usuário, podendo ser utilizando no HomeHeader. Vamos criar uma tipagem de “props” personalizada para nosso componente.

**Vamos ver como podemos carregar imagem externas no componente de imagem do NativeBase**

**Botão Logout**
Nessa aula prática vamos aprender como podemos repassar o tema do NativeBase para ícones de libs externas como o MaterialIcon que importamos do @expo/vector-icon, para isso vamos utilizar o componente Icon do NativeBase

**Finalizando o HomeHeader**
Nessa aula prática vamos adicionar a estilização responsável por fazer o botão de logout ficar totalmente para a direita no nosso HomeHeader.

**Criando componente Group**
Nessa aula prática vamos iniciar a criação do componente responsável por fazer a filtragem do grupo de exercícios.

**Utilizando o Pressable**
Nessa aula prática vamos aprender a utilizar o componente Pressable do NativeBase. Vamos entender as diferenças entre ele e o TouchableOpacity.

**Estilizando evento de Pressed**
Nessa aula prática vamos aprender como podemos customizar o Pressable no momento em que o componente esteja ou não sendo pressionado utilizando a propriedade \_pressed.

**Exibindo o grupo selecionado**
Nessa aula prática vamos criar uma estilização semelhante ao \_pressed para podermos indicar o grupo que está selecionado no momento, para isso vamos adicionar uma propriedade isActive para o componente Group e utilizar o estado da aplicação para indicar o estado selecionado.

**Listando os grupos**
Nessa aula prática vamos criar a listagem horizontal de grupos utilizando a FlatList do NativeBase, para melhorar a experiência vamos criar um estado auxiliar para termos mais grupos para serem listados.

**Header da lista de exercícios**
Nessa aula prática vamos criar o cabeçalho da listagem de exercícios, adicionando a quantidade de exercícios listados de forma estática.

**Criando componente ExerciseCard**
Nessa aula prática vamos criar o componente de ExerciseCard que será o componente responsável por exibir os detalhes do exercício no momento da listagem.

Vamos aprender como podemos a limitar a quantidade de linhas que serão exibidas utilizando o numberOfLines.

**Listando exercícios**
Nessa aula pratica vamos simular a listagem de exercícios na tela Home, para isso vamos criar um estado que irá auxiliar na listagem.

Vamos também colocar no número de exercícios de forma dinâmica no cabeçalho da listagem.

**Recap da Home**
Nessa aula vamo passar por tudo que fizemos na tela de Home, repassando por todos os componentes que criamos para compor essa tela.

Também ajustamos a validação no componente de Group para que independente se o nome do grupo for maiúsculo ou minúsculo adicionar a condição de selecionado.

**Componente ScreenHeader**
Nessa aula prática vamos criar o componente de cabeçalho que vamos compartilhar entre várias telas da nossa aplicação o ScreenHeader.

**Componente HistoryCard**
Nessa aula prática vamos criar o componente responsável por exibir os detalhes do histórico de exercícios concluídos o HistoryCard.

**Entendendo a SectionList**
Nessa aula vamos conhecer um novo componente que vai nos ajudar a agrupar uma listagem de dados na nossa aplicação.

**Utilizando SectionList**
Nessa aula prática vamos aprender como podemos utilizar a SectionList na nossa aplicação, aprendendo qual formato dos dados que uma SectionList recebe.

Vamos aprender algumas propriedades que ajudam a estilizar a SectionList como renderSectionHeader.

**Mensagem de lista vazia**
Nessa aula prática vamos aprender como podemos adicionar um componente personalizado para exibir quando uma listagem está vazia utilizando a propriedade ListEmptyComponent.

Vamos aprender como podemos dar uma quebra de linha nos nossos textos utilizando o {'\n'}.

**Recap da History**
Nessa aula vamos repassar pela tela de History passando por todos os componentes que criamos para compor essa tela.

**Header do Perfil do Usuário**
Nessa aula prática vamos reutilizar o componente ScreenHeader para adicionarmos o cabeçalho da tela de Profile.

**Foto do usuário**
Nessa aula prática vamos reutilizar o componente UserPhoto para exibirmos a foto do usuário também na tela de Profile alterando somente o tamanho que a foto será exibida.

**Efeito Skeleton**
Nessa aula prática vamos conhecer e aprender a utilizar componente de Skeleton do NativeBase.

O Skeleton irá servir como um feedback de loading para a imagem, enquanto a imagem ainda não foi carregada na nossa tela de Profile.

**Botão alterar foto**
Nessa aula prática vamos criar o botão que será responsável por abrir a galeria para podermos alterar a foto de perfil do usuário.

**Inputs de nome e e-mails**
Nessa aula prática vamos adicionar os inputs de nome e e-mail na nossa tela de Profile alterando a cor de fundo dos inputs para poder criar um contraste entre o input e a cor de fundo da tela.

Vamos também desabilitar o input de e-mail para não podermos alterar o valor do input.

**Inputs de senha**
Ness aula prática vamos criar a seção onde ficarão os inputs de alterar a senha do usuário na tela de Profile. Vamos adicionar também o botão de atualizar os dados do usuário.

**Recap da Profile**
Nessa aula vamos repassar pela tela de perfil do usuário, passando por todos os componentes que criamos para compor a tela e lembrar tudo que aprendendo durante o desenvolvimento dessa interface.

Vamos fazer um ajuste no título da seção de alterar a senha do usuário e padddingBotton da ScrollView.

**Navegando para tela de exercício**
Nessa aula prática vamos navegar usuário para ela de exercício utilizando a estratégia de navegação utilizando o hook de useNavigation.

**Criando Botão de Voltar**
Nessa aula prática vamos criar o cabeçalho da tela Exercise adicionando nele o botão que será responsável por fazer a ação de voltar de tela até a Home utilizando o goBack.

**Finalizando o Header do Exercício**
Nessa aula prática vamos adicionar o título do exercício no cabeçalho da tela. Vamos aprender como evitar que o texto sobreponha o ícone no cabeçalho utilizando a propriedade flexShrink no texto para realizar a quebra de linha de forma correta.

**Imagem do Exercício**
Nessa aula prática vamos criar o componente que irá exibir a imagem correspondente do exercício. Vamos aprender como ajustar para a imagem de acordo com o tamanho da view que ela está inserida utilizando o resizeMode.

**Finalizando a interface de exercícios**
Nessa aula prática vamos finalizar a interface de exercícios criando a Box responsável por exibir os dados de como devemos realizar o exercício.

**Recap da Exercise**
Nessa aula vamos repassar pela tela de Exercise passando por todos os componentes que foram criados para compor essa tela.

**Ajustes finais nas interfaces**
Nessa aula prática vamos fazer alguns ajustes na nossa aplicação para que as interfaces fiquem 1uidas e compatíveis com os ambientes Android e iOS, com telas maiores e telas menores.

**Quiz - Finalizando as interfaces**

`1. Ao utilizarmos o componente Pressable do NativeBase, para adicionar uma estilização para quando ele está sendo pressionado, utilizamos qual propriedade?`
R: \_pressed

`2. Quando utilizamos a SectionList precisamos repassar os dados de uma forma diferente da FlatList, qual desses formatos é válido para a SectionList?`
R:const sections = [
{
title: 'Título',
data: [{ id: '1', name: 'Jonh Doe' }],
},
];

`3. No NativeBase quando precisamos deixar os itens de um componente na horizontal utilizando o HStack`
R: True

## Galeria de Fotos

**Proposta**

Nessa aula introdutória vamos parabenizar você por ter chegado até aqui! Vamos entender o que será trabalhado nas próximas aulas, que será a funcionalidade de selecionar fotos no dispositivo do usuário.

**Instalando o Image Picker**

Nessa aula prática vamos instalar a lib que nos ajudará a selecionar as imagens no dispositivo do usuário que é expo-image-picker.

Essa lib depende de permissões do usuário, então vamos aprender também como podemos liberar essa permissões para no app.

`npx expo install expo-image-picker`

**Acessando Album de fotos**

Nessa aula prática vamos aprender como podemos utilizar o ImagePicker para acessar a galeria do dispositivo do usuário.

Vamos aprender também como podemos adicionar fotos de teste no nosso album em um emulador, seja Android ou IOS.

**Habilitar edição da imagem**

Nessa aula prática vamos aprender como podemos utilizar o ImagePicker para habilitar a edição na imagem selecionada e termos recursos como cortar e rotacionar a imagem selecionada pelo usuário.

Vamos também ver como podemos restringir o tipo de arquivo que pode ser selecionado e como definir a qualidade e aspecto da imagem.

**Recuperando foto selecionada**

Nessa aula prática vamos aprender como podemos recuperar informações da foto selecionada como o type , o base64 e a uri da imagem.

Vamos entender como trabalhar com a propriedade cancelled para previnir erros no fluxo da aplicação.

**Exibindo a foto selecionada**

Nessa aula prática vamos ver como podemos utilizar a uri retornada da foto selecionada e exibir como foto do usuário na nossa aplicação.

Como mencionado na aula, a forma de buscar uri foi regravada, mas não em todas as aulas que apareceram o uri. Então, façam o fix mencionado na aula e caso se deparem com a forma antiga nas aulas seguintes, não se preocupem, podem manter o fix.

**Ativando o carregamento da foto**

Nessa aula prática vamos verificar se a foto está sendo selecionada para criar o estado de loading para darmos um feedback para o usuário enquanto e foto é carregada, além de validarmos se existe uma uri para a imagem.

**File System**

Nessa aula prática vamos aprender como podemos limitar o tamanho das imagens o usuário pode selecionar, utilizando a lib expo-file-system.

Vamos ver também que alguns recursos de uma lib podem estar disponíveis somente e um dos ambientes, Android ou IOS.

`npx expo install expo-file-system`

**Buscando informações do arquivo**

Nessa aula prática vamos aprender como podemos buscar as informações do arquivo utilizando o FileSystem, através da uri da foto.

**Restringindo tamanho da foto**

Nessa aula prática vamos aprender como validar o tamanho da imagem através da propriedade size, convertendo o tamanho de bytes para megabytes.

**Utilizando mensagens toast**
Nessa aula prática vamos aprender como podemos personalizar nossas mensagens de alerta utilizando toasts do NativeBase através de um hook chamado useToast.

**Recap**

**Quiz - Galeria de Fotos**

Questão 1. Qual propriedade utilizamos para restringir para que só possam ser selecionadas imagens?
R:ImagePicker.MediaTypeOptions.Images

Questão 2. Qual melhor estratégia para exibir uma imagem selecionada?
Resposta
Utilizar a URI para exibir a imagem.

Questão 3. Utilizamos o `expo-file-system` para recuperar o tamanho de um arquivo, pois o `expo-image-picker` não possui suporte do `fileSize` para Android.
Resposta
Verdadeiro

## Formulários

**Proposta**
Nessa aula introdutória vamos falar um pouco sobre algumas estratégias de obter dados de um formulário, fazer validação e muito mais.

**Inputs com estados**

Nessa aula prática vamos começar a trabalhar com formulários na aplicação, vamos começar pela a tela de SignUp.

Vamos relembrar como podemos recuperar os dados de um input através de estados.

**Compreendendo o React Hook Forms**

Nessa aula introdutória vamos conhecer o React Hook Form, a lib que vamos utilizar para controlar nossos formulários.

Vamos entender a lógica dessa lib e entender como ela irá nos ajudar a deixar nossos formulários mais performáticos.

**Instalando o React Hook Forms**

Nessa aula prática vamos instalar o React Hook Form na nossa aplicação.

**Inputs Controlados**

Nessa aula prática vamos começar a utilizar o React Hook Form para controlar nossos inputs, através do hook useForm, utilizando a propriedade control que vai ser responsável pelo controle de inputs.

**Obtendo valores do formulário**

Nessa aula prática vamos aprender como podemos obter os dados de um formulário controlado pelo React Hook Form, utilizando a função handleSubmit.

Dessa forma vamos ter acesso a todos os valores do formulário de um só vez no momento do submit do formulário.

**Tipando os dados do formulário**

Nessa aula prática vamos criar uma tipagem para definir quais tipos de dados são repassados para nosso formulário, além disso vamos aprender como apresentar para o usuário quais inputs estão disponíveis para uso.

**Valores Iniciais no Formulário**

Nessa aula prática vamos aprender como podemos definir valores inicias para um formulário, através da propriedade defaultValues repassado para o useForm.

**Adicionando regras aos input**

Nessa aula prática vamos aprender como podemos validar nossos inputs através da propriedade rules repassado para o componente Controller para evitar que o formulário seja enviado com dados inválidos.

**Obtendo a mensagem de erro**
Nessa aula prática vamos aprender como podemos obter as mensagens de erro que são gerados pela validação. Vamos recuperar os errors que são repassados pela propriedade formState.

Como o erro pode ou não existir, vamos fazer uma verificação para exibir a mensagem de erro.

**Rules Patterns**
Nessa aula prática vamos aprender como podemos utilizar os rules patterns para criar validações personalizadas como um validação de e-mail por meio de regex.

**Estilizando mensagens de validação**

Nessa aula prática vamos estilizar as mensagens de erro do nosso formulário para melhorar a experiência do usuário utilizando componente FormControll do NativeBase.

**Estilizando Inputs Inválidos**

Nessa aula prática vamos adicionar um estilo diferente para o input caso o mesmo esteja com algum erro de validação.

**Conhecendo Schema Validations**

Nessa aula prática vamos conhecer uma forma diferente de validar o formulário que é a estratégia de Schema Validation.

Vamos instalar a lib que irá nos ajudar a fazer essa validação na nossa aplicação que é o yup.

**Utilizando Schema Validations**

Nessa aula prática iremos criar nosso schema de validação no formulário. Vamos criar o objeto de validação e aprender como utilizar as propriedades que já vem por padrão no yup para adicionar regras de validação para os dados do formulário.

**Validando senha**

Nessa aula prática vamos fazer a validação da nossa senha, aprendendo como podemos definir um tamanho mínimo de caracteres que nossa senha espera receber.

**Validando confirmação da senha**

Nessa aula prática vamos fazer a validação da confirmação de senha, vamos aprender também como podemos fazer uma validação baseada em um valor que está referenciado em algum outro input do nosso formulário.

**Recap**

Nessa aula de revisão vamos revisar nossa aplicação, focando em rever tudo que trabalhamos no nosso formulário de criação de contas.

Repassamos pelas estratégias de validação que utilizamos durante o desenvolvimento da aplicação.

Fizemos algumas refatorações para melhor a experiência de uso da nossa aplicação.

**Ajustando Heading**

Nessa aula prática vamos fazer alguns ajustes no fontFamily dos componentes de Heading na aplicação para que o negrito seja aplicado tanto no Android, quanto no IOS.

**Encerramento**

Nessa aula de encerramento vamos lhe dar os parabéns por ter chegado ao final do módulo! Vamos falar sobre a sequência dessa aplicação que virá no próximo módulo.

Vamos relembrar tudo que aprendemos durante o desenvolvimento da aplicação.

**Quiz - Formulários**

Questão 1. Como o React Hook Form obtém os dados do nosso formulário?
Resposta
Utilizamos inputs controlados e utilizamos a função handleSubmit para obter os dados.

Questão 2. Devemos utilizar sempre o React Hook Form, mesmo se aplicação não tiver um número grande de inputs.
Resposta
Falso

Questão 3. Qual a vantagem de utilizar Schema Validation com yup?
Resposta
Podemos definir um formato de dados no formulário e utilizar validações que vem por padrão no yup.
