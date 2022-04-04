import express from "express";
import {gettodoList, createNewItem, getAItem, deleteItem, updateChecked} from '../controller/todolistController.js'

const router = express.Router()

router.get('/', gettodoList)
router.post('/', createNewItem)
router.get('/:id/', getAItem)
router.delete('/:id', deleteItem)
router.patch('/:id/checked', updateChecked)

export default router