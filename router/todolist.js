import express from "express";
import {gettodoList, createNewItem} from '../controller/todolistController.js'

const router = express.Router()

router.get('/', gettodoList)
router.post('/', createNewItem)

export default router