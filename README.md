# Avaliação 2

#### Disciplina: Introdução ao Desenvolvimento Mobile 
#### Professor(a): Érica C. R. Carvalho
#### Data de entrega: 30/05/22 às 23h
#### Valor: 3 pontos

### Tema: Desafio Banco

>Você foi contratado para fazer parte de uma equipe de desenvolvimento de um banco
>muito famoso e deve ajudar essa equipe a criar um app para que os clientes possam
>abrir uma conta nesse banco.

No app deve ser utilizado pelo menos 2 tipos de navegação Stack, Tabs, Drawer) com pelo menos 3 telas e com os seguintes itens:

<br>
1. Tela inicial, contendo (no mínimo):

- O logo e nome do Banco.
- Outras informações do banco devem ser adicionadas (use sua criatividade de desenvolvedor Front-end para personalizar a tela inicial).
- Pelo menos 2 animações nessa tela.
<br>

2. Tela de ajuda/sobre, contendo (no mínimo):

- Tela com informações que o banco deve fornecer caso o cliente queira entrar em contato com o banco de outras formas (telefone, link para site, etc).
- Informações sobre o banco, podendo conter dados e/ou tabelas sobre ele.
- Pelo menos 2 animações nessa tela.<br>
<br>

3. Tela para abertura de uma conta, contendo (no mínimo):

- Nessa tela, devem ser informados os seguintes campos usando os
componentes indicados:
- Nome (TextInput)
- Idade (TextInput)
- Gênero (Picker do @react-native-picker/picker) [link](https://github.com/react-native-picker/picker).
- Seu limite (Slider do @react-native-community/slider) [link](https://www.npmjs.com/package/@react-native-community/slider).
- Estudante (Switch)
- Abrir a conta (TouchableOpacity)
- Resetar (TouchableOpacity)
- Ao cliclar no botão 'Abrir a conta', todos os dados devem ser mostrados na
tela em uma alerta (alert()). Caso algum dado esteja em branco, nenhum dado deve
ser exibido e deve ser informado que todos os campos devem ser preenchidos.
- Ao cliclar no botão 'Resetar', todos os campos devem voltar ao seu valor
(estado) inicial.
- Deve conter pelo menos 1 animação nessa tela.
- Ver o vídeo no AVA que ilustra o comportamento desta tela.
<br>

#### Os seguintes elementos devem estar presentes no código

- Devem ser criados componentes para cada tela/parte do código.
- As cores e os tamanhos devem estar em um arquivo separado (ex.: colors.js e
sizes.js)
- Os botões e os inputs de texto devem ser um componente sem estado (ex.:
MyButton.js e MyTextInput.js)
- Devem ser utilizados pelo menos 2 React Hooks (useState, useEffect ou
useMemo)

#### Observações:

- A avaliação é individual.
- Não é permitido copiar do colega. Se isso ocorrer, a nota será dividida pelo total de
alunos envolvidos na cópia.
- Usa sua criatividade para personalizar o app. Qualquer conteúdo adicional será
validado.