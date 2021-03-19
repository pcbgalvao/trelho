## Trello Challenge
### Chalenge 
Create a Trello like web application. It should allow data persistence and means to change it (CRUD operations). You should pace your efforts for a two week project and deliver the most functionalities and look alike features with Trello that you can squeeze in this time frame.

### Functional and UI components Requirements 
1. Authentication/sign up (can be simple) using JWT
2. CRUD operations on cards and related entities
3. global lists, 
4. moveable cards, 
5. multiple lists inside cards, 
6. description, 
7. auto-save inputs

### Tech requirements
1. React hooks,
2.  Typescript, 
3. Redux, Material-ui (optional, you can choose any other UI library) 
4.  Use JSON Server to provide a simple backend API for the project (ask for help if need to)
5.  Unit testing (jest) for React is a plus

### Doubts 
Olá Nuno, olá a todos, 
quanto aos requisitos e por que têm impacto tanto na parte de front-end, como no desenho dos esquemas (schemas) do mongo, as minhas dúvidas são as seguntes:

1. Se o requisitos referem que temos que implementar um componente de "global lists", pressupõe-se que as listas poderão ser visiveis por todos os utilizadores registados, ou privada, só visiveis pelo utilizador autenticado?
2. Na sequência do ponto anterior, caso se confirme que as listas poderão ser globais ou privadas, deve-se concluir que isso também se aplica aos cartões associadas a essas listas?
3. "Multiple lists inside cards", quer dizer que um cartão poderá estar associado a diferentes listas?
4. Somando tudo, os cartões herdam a visibilidade da lista onde estão inseridos?
5. Deveremos implementar pesquisas de "Boards", "Lists" e "Cards"?


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
