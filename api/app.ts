import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import Sentry from "@sentry/node";
import Tracing from "@sentry/tracing";
import path from 'path';

const openapi = require('express-openapi');
import { initialize } from "express-openapi";
const cors = require("cors");
const swagger = require('./../swagger')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dir = path.join(__dirname, 'controllers');
console.log("dir: ===>",dir)
initialize({
  apiDoc: swagger,
  app,
  consumesMiddleware: {
    'application/json': bodyParser.json(),
  },
  dependencies: {},
  errorMiddleware: (err: any, req: Request, res: Response, next: NextFunction) => {
    let errMsg;
    try {
      errMsg = JSON.parse(err.message)
      errMsg = errMsg.message ? errMsg.message : err.message;
    }catch(e){
      errMsg = err.message
    }
    if((err.code && err.code >= 500) || (err.status && err.status >= 500)) {
      Sentry.captureException(err);
    }
    res.status(err.code || err.status || 500).send({
      message: errMsg,
      errors: err.errors,
    });
  },
  docsPath: '/swagger',
  enableObjectCoercion: true,
  paths: path.join(__dirname, 'controllers'),
  promiseMode: true,
  validateApiDoc: true,
  // routesGlob: '**/*.{ts,js}',
  // routesIndexFileRegExp: /(?:index)?\.[tj]s$/
});

export default app;
