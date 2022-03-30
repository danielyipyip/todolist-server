import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

const port = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL)
.then(app.listen(port, ()=>console.log(`server start on port: ${port}`)))
.catch(err=>console.log(err))
