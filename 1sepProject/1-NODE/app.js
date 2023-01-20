import express from 'express';
import cors from 'cors'
const app = express();

import { createmongoconnection } from './db'
createmongoconnection();

import customer from './routes/customer'
// import booklist from './routes/book'
// import getDetailById from './routes/book'
// import UpdateBook from './routes/book'
 import userlogin from './routes/login'

import bodyParser from 'body-parser';
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use("/customer", customer);



export default app;