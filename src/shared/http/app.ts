import 'reflect-metadata';
import 'dotenv/config'
import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import createConnection from '../../shared/database';
import { AppError } from "../errors/AppError";
import '../container';
import { router } from './routes';

createConnection().then(() => {
  console.log("Database up!");
});

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if ( err instanceof AppError ) {
      return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({message: `Internal server error - ${err.message}`})
  }
)

export { app };