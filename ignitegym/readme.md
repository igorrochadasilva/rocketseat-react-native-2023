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

## Fundamentos

**Introdução - Integração com back-end**
Nessa aula introdutória vamos conversar sobre o que será ensinado no módulo como consumo de api, refresh token, upload de imagens e muito mais.

**Sobre a aplicação**
Nessa aula introdutória vamos relembrar do projeto desenvolvido no módulo passado, dando continuidade nele nesse novo módulo.

**Sobre o back-end**

Nessa aula introdutória vamos executar o back-end que será a API da nossa aplicação.
Vamos explicar como essa API será útil para o desenvolvimento desse módulo. Vamos ver como podemos acessar a documentação de rotas dessa API.

Link da api: https://github.com/rodrigorgtic/ignitegym-api

**Organizando o projeto**

Nessa aula prática vamos baixar a nossa API e organizar o projeto para termos as pastas da aplicação mobile e do back-end dentro de uma única pasta, para deixarmos nosso projeto mais organizado.

**O que é uma API**

Nessa aula introdutória vamos aprender o que é uma API, utilizando uma analogia a um restaurante para podermos entender melhor com a API funciona na teoria.

**Métodos HTTP**

Nessa aula introdutória vamos conhecer os metódos HTTP que uma API Rest utiliza para se comunicar com nossa aplicação. Vamos conhecer alguns métodos como o GET, POST e etc.

**HTTP Codes**
Nessa aula introdutória vamos conhecer os HTTP Codes, que são os status que o back-end devolve para o front-end, indicando falha ou sucesso. Vamos repassar pelos tipos de status code entender que cada faixa de status significa.

**Quiz - Fundamentos Integração com backend**

Questão 1. Nas aulas anteriores aprendemos o que é e como funciona uma API. Uma boa definição para descrever uma API seria fazendo uma analogia à um restaurante, onde a onde o garçom seria API, que transita os dados entre cliente(aplicação mobile/web) e a cozinha(servidor).
Resposta
Verdadeiro

Questão 2. Aprendemos também o que são Métodos HTTP e para que cada um deles serve em relação a comunicação com a API. Quais desses desse métodos que geralmente utilizamos para atualizar mais de uma informação no nosso backend?
Resposta
PUT

Questão 3. Os HTTP Codes servem para indicar o status de uma requisição feita ao backend. Qual HTTP Code indica um erro de autenticação?
Resposta
401

## Fetch API

**Proposta**

Descrição
Nessa aula introdutória vamos falar um pouco sobre um recurso nativo do JavaScript para realizar chamada HTTP, a fetch API.

**Visualizando o banco de dados**

Nessa aula introdutória vamos conhecer a ferramenta que vamos utilizar para visualizar o banco de dados da nossa API, o Beekpeer Studio.

Link para download do beekeper: https://github.com/beekeeper-studio/beekeeper-studio/releases

**Cadastrando usuário**

Nessa aula prática vamos aprender como utilizar o fetch do JavaScript para cadastrar um usuário novo no nosso back-end, utilizando o método POST.
Vamos aprender como utilizar o nosso IP local para fazermos a conexão com a API.

**Obtendo resposta do back-end**
Nessa aula prática vamos aprender como podemos receber as respostas que vem do back-end no momento da requisição, utilizando o .then para capturar o retorno da API.

**Async Await**

Nessa aula prática vamos aprender como podemos utilizar o async/await para capturar respostas assíncronas na aplicação no lugar do .then. Vamos ver como funciona o retorno da API, caso não utilizarmos alguma dessas estratégias.

**Entendo o fluxo do back-end**

Nessa aula de revisão vamos repassar pela funcionalidade de cadastrar usuário, entrando na API e entendendo como funcionam os fluxos de validação e cadastro no lado do back-end.

**Quiz - Fetch API**

Questão 1. Nas aulas anteriores utilizamos o fetch para realizar a conexão entre nosso app mobile e nossa API. Qual a forma correta de realizar uma requisição POST utilizando o fetch?
Resposta
fetch('<http://localhost:3333/users>', {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({ name, email, password })
});

Questão 2. Qual a finalidade da estratégia de Async/Await na nossa aplicação?
Resposta
Garantir que a função aguarde a chamada a API finalizar para seguir com o fluxo da aplicação.

## HTTP Client

**HTTP Client**

Nessa aula introdutória vamos revisar como foi feita a chamada que temos à API até agora utilizando o fecth e vamos conhecer o HTTP Client que iremos utilizar para simplificar a requisições para a API, o axios.

**Instalando o Axios**

Nessa aula prática vamos conhecer um pouco mais sobre o axios, entendendo a proposta por trás dele e vamos instalar essa lib na aplicação para gereciar nossas requisições.

**Definindo nossa API**

Nessa aula prática vamos criar a configuração do axios para facilitar na chamada dele para realizar as requisições para a API, para isso vamos configurar um endereço base para nossas requisições utilizando a propriedade baseURL, que temos dentro do axios.create.

**Utilizando Axios**

Nessa aula prática vamos refatorar a chamada a API de criação de usuários, vamos alterar a chamada via fetch para uma chamada com o axios.
Vamos comentar sobre as diferenças que temos utilizando as duas estratégias.

**Axios Exceptions**

Nessa aula prática vamos entender como o axios lida com erros que vêm da API, além de erros genéricos que podem acontecer no momento da requisição.
Vamos comentar como podemos exibir esses erros para o usuário.

**Entendendo Interceptors**
Nessa aula prática vamos conhecer a funcionalidade de interceptors do axios. Vamos aprender como podemos utilizar esse recurso do axios para interceptar requisições e respostas e podermos trabalhar algum tipo de lógica com essa informações que estão trafegando por nossa requisição.

**Criando o AppError**
Nessa aula prática vamos criar nossa classe de erro customizada para termos um controler melhor dos erros que ocorrem na nossa aplicação.

**Tratando Erros da API**

Nessa aula prática vamos utilizar os interceptors para podermos tratar os erros que estão acontecendo, com isso vamos poder tratar de forma mais padronizada os erros da nossa aplicação para podermos validar e trabalhar de formas específicas para cada tipo de erro que o ocorre na aplicação.
Vamos utilizar o useToast do NativeBase para podermos dar um feedback visual para o usuário quando algum erro acontecer.

**Quiz - HTTP Client**

Questão 1. Aprendemos a utilizar o Axios como nosso HTTP client para facilitar requisições para nossa API. Qual a forma correta de definir na url padrão da nossa API, para o Axios?
Resposta
export const api = axios.create({
baseURL: 'http://localhost:3333'
});

Questão 2. Os "interceptors" do Axios são muito úteis para nossa aplicação, com ele podemos trabalhar com as informações que estão sendo enviadas ou recebidas para a aplicação antes que elas chegam no destino para poderem ser utilizadas da forma que precisarmos.
Resposta
Verdadeiro

Questão 3. Uma boa prática é sempre dar um feedback visual para o usuário das ações que ele realiza. Utilizamos os interceptors para tratar os erros da aplicação e para exibir eles para o usuário, nós utilizamos o hook:
Resposta
useToast

## Contextos no React Native

**Proposta**
Nessa aula introdutória vamos falar sobre sobre compartilhamento de informações de conversar sobre como podemos fazer esse tipo de compartilhamento de forma global em nossa aplicação.

**Conceito de Contexto**
Nessa aula introdutória vamos entender o conceito de Contextos no React. Vamos aprender como podemos utilizar essa estratégia para podermos compartilhar informações entre componentes de forma global sem precisar utilizar Prop Drilling.

**Criando um contexto**

Nessa aula prática vamos iniciar a criação do nosso contexto de autenticação. Vamos entener como esse contexto pode receber e compartilhar valores.

**Tipando contexto**

Nessa aula prática vamos criar um tipagem para nosso contexto, para que a aplicação consiga saber quais dados o nosso contexto pode compartilhar e garantir um padrão para os dados do contexto.

**Unificando o create e provider context**
Nessa aula prática vamos refatorar nosso AuthContext.tsx e criar nosso Provider customizado, com isso vamos unificar a criação do contexto e o provedor de informações do contexto em um único arquivo.

**Criando seu próprio Hook**

Nessa aula prática vamos criar nosso hook customizado, o useAuth, ele irá nos ajudar facilitando a consumir o nosso contexto. Com esse hook vamos simplificar a formar com que podemos utilizar as informações que nosso contexto expõe para a aplicação.

**Compartilhando estados no contexto**

Nessa aula prática vamos refatorar nosso contexto, movendo os dados que estamos repassando no value do nosso Provider para um estado, com isso podemos manipular os dados desse contexto de forma mais fácil.

**Recapitulando o formulário de SignIn**
Nessa aula de revisão vamos repassar pelo nossa tela de SignIn, entendendo o que foi alterado para que essa tela consiga executar o login do usuário, validando formulários e etc.

**Atualizando estados no contexto**

Nessa aula prática vamos criar a função signIn, que será responsável por receber e-mail e senha do usuário e atualizar os dados dele no estado do contexto.

**Buscando dados do usuário no back-end**
Nessa aula prática vamos criar a parte funcional do método de signIn do nosso contexto. Vamos fazer uma requisição para nossa API, receber os dados do usuário devolvido por ela e salvar no estado do contexto.

**Tratando Exceções do handleSignIn**

Nessa aula prática vamos previnir e tratar os erros que podem acontecer no momento do login, na nossa tela de SignIn, adicionando um bloco try/catch para verificar possíveis erros e adicionando um toast para feedback.

**Feedback de SignIn**

Nessa aula prática vamos criar um estado de loading para indicar que a aplicação está realizando uma chamada para API e indicar um feedback visual para o usuário.

**Redirecionar o usuário logado**

Nessa aula prática vamos utilizar o nosso contexto para exibir o grupo de rotas correta para o usuário, baseado em se existe ou não dados do usuário no estado. Caso o usuário esteja logado, exibiremos as rotas da aplicação, caso contrário vamos exibir as rotas de autenticação.

**Instalando o AsyncStorage**

Nessa aula prática vamos instalar o AsyncStorage para podermos persistir os dados do usuário no dispositivo.

`npx expo install @react-native-async-storage/async-storage`

**Persistindo usuário logado**

Nessa aula prática vamos persistir os dados que foram buscados do back-end no dispositivo do usuário, para que nos próximos acessos os dados já estejam disponíveis para utilização. Vamos criar arquivos de configuração, e funções que irão nos ajudar a criar essa funcionalidade.

**Carregando usuário logado**

Nessa aula prática vamos buscar no dispositivo o usuário que foi salvo no momento do login, para isso vamo criar um useEffect que será responsável por verificar os dados armazenados e preencher o estado, caso existam dados armazenados.

**Exibindo Loading enquanto carrega usuário**

Nessa aula prática vamos criar um estado de loading para nosso contexto que irá verificar se estão sendo buscado os dados no dispositivo e exibir um feeback para evitar glitch entre as rotas.

**Exibindo nome do usuário**

Nessa aula prática vamos aproveitar os dados armazenados em nosso contexto para exibir o nome do usuário no Header.

**Exibindo a foto padrão do usuário**

Nessa aula prática vamos configurar nossa aplicação para exibir uma foto padrão para o usuário caso não exista nos dados da API.

**Criando o método signOut**

Nessa aula prática vamos implementar a função de singOut no nosso contexto. Com ele vamos remover os dados do usuário tanto no estado quando no armazenamento do dispositivo.

**Criando conta e logando usuario**

Nessa aula prática vamos implementar a funcionalidade de realizar o login logo após a criação da conta, para que o usuário não precise voltar para tela de login e realizar o login novamente.

**Quiz - Contextos no React Native**

Questão 1. Aprendemos que os contextos são formas de compartilhar informações de formas globais para nossa aplicação. Qual a melhor forma de inicializar um contexto no React Native?

`type AuthContextProps = { signIn: () => void }`
`const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)`

Questão 2. Já utilizamos exemplos de contexto em nossa aplicação, como o na criação das rotas com o `NavigationContainer` e para compartilhar as...
R: Verdadeiro

Questão 3. Podemos compartilhar valores do nosso contexto entre vários componentes, sendo eles estados, funções e etc. De qual forma podemos...
R:

`<AuthContext.Provider`
`value={{ user, signOut: handleSignOut}}`
`{children}`
`</AuthContext.Provider>`

## Autenticação JWT

**Proposta - Autenticação JWT**
Nessa aula introdutória vamos falar um pouco e entender sobre um conceito de autenticação chamado JSON Web Token (JWT), que iremos utilizar na nossa aplicação.

**Autenticação JWT**
Nessa aula teórica iremos abordar o fluxo de autenticação do usuário, seja para obter o token da API ao realizar o login, seja para acessar as rotas protegidas da aplicação informando o token nos cabeçalhos da requisição.

**O que é JWT**
Nessa aula teórica você irá entender melhor o padrão do token que será utilizado na nossa aplicação: o JWT (JSON Web Token).

**Obtendo Token do usuário**
Nessa curta aula prática você irá verificar que já recebíamos o token na resposta do login.

**Persistindo token do usuário**
Nessa aula prática iremos criar a estrutura necessária no storage para persistir os dados do token. Tanto a chave AUTH_TOKEN_STORAGE quanto o método storageAuthTokenSave são desenvolvidos nessa etapa.

**Anexando token nas requisições**
Nessa aula prática você irá preservar o token e anexá-lo nos cabeçalhos das requisições ao realizar o login na aplicação. Para isso utilizaremos o método storageAuthTokenSave e o api.defaults.headers.common['Authorization'].

**Recuperando o token do storage**
Nessa aula prática iremos criar um novo método para obter os dados do token preservado e também refatorar o nosso AuthContext.tsx para reaproveitar melhor as etapas de preservação de dados e atualização dos estados. Para isso, serão desenvolvidos os métodos userAndTokenUpdate, storageUserAndTokenSave e storageAuthTokenGet.

**Removendo o token do storage**
Para finalizar essa etapa de preservação do token, iremos criar um novo método para removê-lo da memória: o storageAuthTokenRemove.

**Quiz - Autenticação JWT**

Questão 1. O JWT será utilizado para criarmos um fluxo de autenticação para gerenciar o acesso do usuário no app. Esse token será obtido por meio da requisição de login do usuário via email/senha e será anexado nas requisições futuras para ele ter acesso às rotas privadas.
Resposta
Verdadeiro

Questão 2. O Json Web Token, também conhecido como JWT, é formado por três partes principais. Escolha a alternativa abaixo que não corresponde a uma delas:
Resposta
Auth Flow: Opção que define o meio de autenticação a ser utilizado.

## Consumindo o Back-end

**Proposta - Consumindo o Back-end**

**Buscando e Listando Grupos**

Nessa aula prática iremos começar a implementar o consumo da API na nossa aplicação. Começaremos pela página Home, adicionando a busca do grupos sempre que a página for montada via o novo método fetchGroups e com auxílio do useEffect.

**Buscando Exercícios por grupo**

Nessa aula prática você irá buscar os exercícios da API dependendo do grupo selecionado. Para isso, você desenvolverá o método fetchExercisesByGroup que será chamada sempre que a página for focada ou o estado groupSelected for alterado.

**Criando o ExerciseDTO**

Nessa aula prática iremos desenvolver o nosso primeiro DTO, arquivos utilizados para auxiliar na tipagem dos dados recebidos via API. Dessa forma, criaremos o ExerciseDTO que será utilizado na tipagem do estado exercises.

**Exibindo exercícios por grupo**
Com a tipagem e atualização do estado exercises implementados na aula anterior, você irá prosseguir para o consumo desses dados no componente ExerciseCard.

**Carregando imagem**
Continuando a exibição dos dados corretos no ExerciseCard, você irá consumir a imagem de thumbnail com auxílio do api.defaults.baseURL.

**Utilizando componente de loading**
Nessa aula prática iremos ajustar a nossa aplicação para exibir o ícone de carregamento enquanto os dados dos grupos e exercícios do grupo ainda não foram obtidos da API. Para isso, utilizaremos um estado isLoading e o nosso componente já desenvolvido Loading.

**Obtendo o ID do Exercício**

Nessa aula prática você irá ajustar a tipagem das rotas autenticadas e passar o id do exercício como parâmetro na navegação para a tela Exercise.

**Exibindo detalhes do Exercício**
Com o id do exercício recebido, iremos busca-lo dos parâmetros da rota, consumir a API em busca dos dados do exercício especificado, popular o estado e exibir essas informações tela.

**Cuidando do carregamento**

Assim como você realizou na tela Home, é precisa apresentar um ícone de carregamento enquanto os dados do exercício não foram recebidos da API. Novamente iremos utilizar um estado isLoading e o componente Loading.

**Registrando histórico**
Agora que os dados já estão sendo corretamente apresentados na tela Exercise, é preciso implementar a funcionalidade de registrar o exercício como realizado. Para isso, desenvolveremos a função handleExerciseHistoryRegister para registrar na nossa API o exercício realizado e navegar o usuário para a tela History ao final do processo.

**Carregando histórico**

Com os exercícios sendo registrados na API, chegou a hora de deixarmos a nossa tela History com os dados dinâmicos. Para isso, começaremos implementado a função fetchHistory que consumirá os dados da API e será executada toda vez que a tela for focada.

**Listando o histórico**

Nessa aula você irá começar a apresentação em tela dos dados do histórico que obteve pela API na aula anterior. Para isso, você irá construir DTOs para tipar o estado exercise, além de atualizá-lo com os dados recebidos da API.

**Exibindo dados do histórico**
Para finalizar a apresentação do dados na tela History, iremos repassar os dados do estado exercise para dentro de cada HistoryCard.

**Carregando dados do usuário no profile**

Nessa aula prática você irá implementar o react-hook-form nos inputs de nome e email da tela Profile. Desde a criação da tipagem do formulário até a definição dos Controllers.

**Obtendo dados do usuário para atualizar**
Prosseguindo com a implementação do react-hookf-form, iremos implementar os Controllers nos inputs restantes e também lidar com o envio dos dados do formulário via handleSubmit.

**Preparando a validação do formulário**

Com o controle dos inputs e recebimento dos dados prontos, você irá iniciar a validação do formulário. Para isso, criaremos um modelo inicial do schema e utilizaremos o resolver do Yup para repassar os erros para os inputs via a prop errorMessage.

**Validando a senha**
Continuando com a validação dos inputs, iremos criar o schema para a validação dos campos de senha nova e confirmação da nova senha.

**Validação condicional da senha**

Nessa aula prática você irá ajustar a validação de senha para que o campo de confirmação da nova senha seja validado condicionalmente, ou seja, apenas quando o campo nova senha estiver preenchido. Para isso, utilizaremos o método when do Yup.

**Ajuste na validação da senha**
Para finalizar essa etapa de validação, iremos ajustar a validação condicional para ser atualizada em tempo real.

**Atualizando usuário no back-end**
Nessa aula prática você irá implementar a atualização do perfil do usuário no banco de dados. Para isso, será implementada a lógica da função handleProfileUpdate.

**Atualizando dados do usuário no storage e estado**

Nessa aula prática iremos atualizar os dados tanto no armazenamento do dispositivo quanto no estado do Contexto. Para isso, criaremos a função updateUserProfile no nosso contexto para atualizar o estado user e atualizar o storage pela função storageUserSave.

**Testando a nova senha**

Para finalizar esse cluster de consumo do backend, iremos testar juntos a atualização da senha via tela de Perfil.

**Quiz - Consumindo o Back-end**

Questão 1. O código abaixo representa uma maneira de fazer uma requisição `GET` na rota `login` de uma API local passando um objeto com as chaves `name` e `email` no `body`: `jsx axios.post('https://localhost:3000/login', { name, email }); `
Resposta
Falso

Questão 2. DTO são utilizados para tipar a resposta das requisições a API, facilitando assim o uso dos dados recebidos do back-end.:
Resposta
Verdadeiro

Questão 3. Assinale abaixo a maneira correta de se receber um parâmetro das rotas:
Resposta
const route = useRoute();

const id = route.params?.id;

Questão 4. Escolha a alternativa que representa um caso incorreto de uso de um método HTTP:
Resposta
Requisição POST para realizar a busca de registros no banco de dados.
