import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import { dbConn } from './data/index';
dotenv.config();
const app = new Koa();

dbConn();

app.use(cors());
app.use(bodyParser());

const PORT: string = process.env.PORT || '3000';

// routes

const server = app.listen(PORT, () =>
  console.log(`Server is listening on port http://localhost:${PORT}.`),
);

app.use(async (ctx) => (ctx.body = { msg: `Welcome to this API.` }));

export = server;
