import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  service: {
    name: "serverless-typescript-template",
  },
  frameworkVersion: "2",
  custom: {
    dotenv: {
      logging: false,
    },
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-dotenv-plugin",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      secret: "${env:SECRET}",
    },
  },
  functions: {
    getter: {
      handler: "index.getter",
      events: [
        {
          http: {
            method: "get",
            path: "getter",
          },
        },
        {
          schedule: {
            rate: "cron(0/5 * * * ? *)",
            name: "every_five_minutes",
          },
        },
      ],
    },
    poster: {
      handler: "index.poster",
      events: [
        {
          http: {
            method: "post",
            path: "poster",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
