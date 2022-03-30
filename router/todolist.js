import express, { Router } from "express";
// import {gettodoList} from '../'

const router = express.Router()

router.get('/', (req, res) => res.send('todolist page'))

export default router