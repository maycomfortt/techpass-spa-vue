# Passport Vue.js Sample App

This is a basic sample app created using Vue.js to showcase the json data that the Cognito API returns mainly using the **Implicit Grant** as the OAuth Flow: 
* **User Information**
* **Access Token Information**
* **ID Token Information**
* **Refresh Token information**

Token data has been decoded and prettified for readability. The application also demonstrates login/logout based on secure/public routing.

**Note: This app does not support sessions, so there is no data persistence.*

Project's **app** folder consists of **3** main js files: 

* **auth.js** - Contains wrapper methods for the Cognito API to facilitate CognitoAuth object and login/logut.
* **user-info-api.js** - Contains ultility method for GET request to Cognito API endpoint.
* **user-info-store.js** - Contains global JSON objects for storing states of logged in user information.

Project's **components** folder consists of: 

* **Error.vue** - Error message page. 
* **Home.vue** - Home page on login.
* **LogoutSuccess.vue** - On successful logout.
* **Start.vue** - Home page before login.
* **layout** folder with SGDS Standard Components for all gov.sg websites - **Masthead**, **MainNav**, **SideBar**, **Footer**
* **router** folder with **index.js** - Vue Router for mapping components 

## Getting Started

These instructions will get you a copy of the application up and running on your local machine for development and testing purposes. 

### Prerequisites

Please have the following installed:

* **[Vue.js](https://vuejs.org/)** - Version 2.6.10
* **[Yarn](https://yarnpkg.com/lang/en/)** - Version 1.13.0

This project was built using **[vue-cli](https://cli.vuejs.org/)**. So to install it, all you have to do is clone the project and to run locally:

``` 
// 1. Install dependencies using yarn or npm (either should be fine)
yarn install 
OR 
npm install (if you are using npm)

// 2. Serve with hot reload at localhost:8080
yarn serve
OR
npm run serve (if you are using npm)

// Build for production 
yarn run build
```

## Environment Variables

We need to store the Amazon Cognito related settings in .env property files in order to make them available for Vue CLI during the application runtime. Environment variables can be modified accordingly to your own Cognito App Client, Note that you will have to create a .env file containining the following variables and add it to the project folder for local development. For this SPA, we also used a .env.local file of which will be ignored by Git.  

You can access your own app client's details via Cognito > Manage User Pools > App Client Settings and General Settings. You can also modify the Redirect URIs and App URLs accordingly to your own port usage where you run your Vue application but you will need to add it to your Cognito app client settings as well.  

| Environment Variable Name | Value | Location
| ------------- | ------------- | ------------- |
| VUE_APP_COGNITO_USERPOOL_ID           | Specify the Developer's **Userpool ID** for local development.|.env.local |
| VUE_APP_COGNITO_APP_DOMAIN            | Specify the Cognito's **Domain Name**                         | .env.local | 
| VUE_APP_COGNITO_CLIENT_ID             | Specify the Cognito's App **Client ID**                 | .env.local | 
| VUE_APP_COGNITO_REDIRECT_URI          | http://localhost:8080/login/oauth2/code/cognito           | .env |
| VUE_APP_COGNITO_REDIRECT_URI_SIGNOUT  | http://localhost:8080/logout                              | .env |
| VUE_APP_APP_URL                       | http://localhost:8080                                     | .env |

## Relevant External Libraries/Node Packages Being Used

* [jwt-decode](https://github.com/auth0/jwt-decode) - For decoding of JWTs which are Base64Url encoded
* [amazon-cognito-auth-js](https://github.com/aws/amazon-cognito-auth-js) -  Amazon Cognito Auth SDK for JavaScript simplifies adding sign-up, sign-in with user profile functionality to web apps.
* [amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js) - Amazon Cognito Identity SDK for JavaScript
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [vue-router](https://router.vuejs.org/) - Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
* [sgds-vue](https://github.com/GovTechSG/sgds-govtech-vue) - Vue components powered by Singapore Government Design System. **In early development stages.*

## Testing
*[To be added]*

## Committing

* After cloning the source from bitbucket, you should create a dev branch for yourself. (i.e. dev/{your_name})
* Make any changes you need on the new branch. Be sure to merge any changes from the parent (i.e. master) branch, so that you won't get a nightmare later.
* Perform a git rebase if you have to although its not necessary.
* Push your changes to bitbucket and create a Pull Request to the parent branch.
* Get the pull request approved before merging your changes back to the parent branch.


## Acknowledgments

Huge thank you to the almighty [Google](https://www.google.com/), [StackOverflow](https://stackoverflow.com/) and these tutorial articles and repo that was used to develop this application: 

* [Integrating Amazon Cognito With Single Page Application (Vue.js) by Mohamed Sanaulla](https://sanaulla.info/2019/04/20/integrating-amazon-cognito-with-single-page-application-vue-js/)
* [RealWorld Example App](https://github.com/gothinkster/vue-realworld-example-app/blob/master/README.md) - Codebase to demonstrate a fully fledged fullstack application built with Vue.js including CRUD operations, authentication, routing, pagination, and more.
* [JWT.IO](https://jwt.io/) - Decode, verify and generate JWT.
* [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc) - Cheatsheet for yarn - npm equivalents.

