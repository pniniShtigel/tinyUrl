import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from './database.js';

import UsersRouter from './Routeres/userRouter.js';
import LinksRouter from './Routeres/linkRouter.js';

connectDB();

const app = express()
const port = 3000

app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());


app.use('/links', LinksRouter);
app.use('/users', UsersRouter);


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
