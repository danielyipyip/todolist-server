import express, { Router } from "express";
import {gettodoList} from '../controller/todolistController.js'

const router = express.Router()

router.get('/', gettodoList)

export default router