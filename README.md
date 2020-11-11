# Basic Serverless & Typescript configuration

This project is a template for creating serverless, Lambda functions on AWS quickly.

The functions are written in Typescript. For information about loading the `.env` files, head [here](https://www.serverless.com/plugins/serverless-dotenv-plugin).

## Installation

`yarn install`

## Development

To run a function locally (compile the files in typescript, then run the compiled `.js` function):

`yarn local FUNCTION_NAME` 

To run a function on the cloud that's been deployed:

`yarn cloud FUNCTION_NAME`

## Deployment

`yarn prod:deploy` 

This command set the `NODE_ENV` to production, loading the correct environment variables, and then deploys the function to the cloud (configuration inside the `.yml` file).
