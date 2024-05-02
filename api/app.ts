import express, { Express, Request, Response, NextFunction } from 'express';
import loggerMiddleware from './middleware/logger'

const cors = require("cors");
const app: Express = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

export default app;
import './route';
