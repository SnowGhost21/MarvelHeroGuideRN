# MarvelHeroGuide

MarvelHeroGuide é um aplicativo que permite ao usuário visualizar uma lista de super heróis, assim como em quais revistas em quadrinhos eles aparecem e quem foi o criador destas histórias e desenvolvido para o aperfeiçoamento do conhecimento do React Native.

# Tecnologia

### Linguagem
Este aplicativo foi escrito utilizando a linguagem [React Native](https://facebook.github.io/react-native/), visto que o framework possibilita a construção de aplicativos para dispositivos Android e iOS.

### Arquitetura
O aplicativo segue com base a arquitetura esperada para comportar o [React Navigation](https://reactnavigation.org/), aliado ao [Redux](https://redux.js.org/) para a obtenção de dados.

As pastas são divididas em 2 grandes grupos que são view que comporta tudo relacionado a telas e componentes customizados e repository que irá comportar toda a lógica de requisição de rede e comportamento do Redux, desta forma a camada de visualização não tem conhecimento da regra de negócio sobre os dados que são exibidos.

### Testes
Os testes irão utilizar a biblioteca [Jest](https://jestjs.io/) e seguindo a filosofia do [TDD](http://tdd.caelum.com.br/).

### Bibliotecas externas
Das bibliotecas externas utilizadas no aplicativo, destaca-se o [React Navigation](https://reactnavigation.org/) que visa facilitar as mudanças de tela do aplicativo de acordo com a necessidade e o [Redux](https://redux.js.org/) para gerênciamento dos dados presentes nas telas.
