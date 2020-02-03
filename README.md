# TechPass Test App in Vue.js

This is a basic sample app created using Vue.js to showcase the JWT tokens thats an Identity Provider returns mainly using the **Implicit Grant** flow. Token data has been decoded and prettified for readability.

## Getting Started
The project uses [Vue.js](https://vuejs.org/). It scripts are written with [Typescript](https://www.typescriptlang.org/index.html). You can find out how Vue works with Typescript [here](https://vuejs.org/v2/guide/typescript.html). 

[Vue CLI Service](https://cli.vuejs.org/guide/cli-service.html) is used to compile and serve the page locally. 

> Note: This app does not support sessions, so there is no data persistence.

### Project Structure
* src/components - Vue.js components
* src/services - Services supporting user interactivities
* src/router.ts - Vue Router for mapping components 

### Setup
1. Clone the repo
2. Run `npm install` or `yarn install`.
3. To compile and serve: `npm start` or `yarn run start`.

> You will need to provision a client id from your identity provider of choice and configure the sign in and sign out URL (and any additional parameters that the service might need). 
> 
> Please refer to the corresponding guide for the managed service.

### Environment Variables
The following environment variables are needed by the OIDC client in order to sign in to the identity provider (IdP).

In order to run the service locally, you will need to create a `.env.local` file and provide **VUE_APP_PROVIDER** and **VUE_APP_CLIENT_ID** env vars. They should not be committed into the repository.

| Environment Variable Name | Value | Location
| ------------- | ------------- | ------------- |
| VUE_APP_SIGN_IN_REDIRECT_URI  | URL for the IdP to redirect to after successful sign in  | .env |
| VUE_APP_SIGN_OUT_REDIRECT_URI | URL for the IdP to redirect to after successful sign out | .env | 
| VUE_APP_PROVIDER              | URL to the IdP (i.e. https://login.microsoftonline.com/common/v2.0/)      | .env.local |
| VUE_APP_CLIENT_ID             | ID string of the client application that you have registered with the IdP | .env.local |

## Changelog
- v0.1.0
  - Initial commit
- v0.2.0
  - Remove dependency on Cognito and move to generic OIDC client.
  - Migrate code base to Typescript.

## Contributing

We welcome your involvement, be it fixing bugs or implementing new features that you find relevant to this library.

To contribute, you may follow the steps below:

1. Fork the repo
2. Create a new branch from development to work on your contribution
3. Create a pull request back when you are done
4. Please refer to the ISSUES and PULL REQUEST templates when raising them. The reviewers will evaluate the request before merging into master

You can raise an issue within this Github repository to kick-start the discussion first.

## License
Licensed under the [MIT LICENSE](./LICENSE)

## Relevant Information
* [OAuth 2.0 protocol standard](https://oauth.net/2/)
* [OpenID](https://openid.net/)
* [JWT](https://jwt.io/)
* [OIDC Client JavaScript Library](https://github.com/IdentityModel/oidc-client-js)


## Acknowledgments

Huge thank you to the almighty [Google](https://www.google.com/), [StackOverflow](https://stackoverflow.com/) and these tutorial articles and repo that was used to develop this application: 

* [Integrating Amazon Cognito With Single Page Application (Vue.js) by Mohamed Sanaulla](https://sanaulla.info/2019/04/20/integrating-amazon-cognito-with-single-page-application-vue-js/)
* [RealWorld Example App](https://github.com/gothinkster/vue-realworld-example-app/blob/master/README.md) - Codebase to demonstrate a fully fledged fullstack application built with Vue.js including CRUD operations, authentication, routing, pagination, and more.
* [JWT.IO](https://jwt.io/) - Decode, verify and generate JWT.
* [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc) - Cheatsheet for yarn - npm equivalents.
