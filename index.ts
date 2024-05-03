const awsServerlessExpress = require('aws-serverless-express');
import app from './api/app';

const server = awsServerlessExpress.createServer(app)
module.exports.handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context);