import mongoose from 'mongoose';
import itemModel from '../models/todolistItem.js';

export const gettodoList = async (req, res) => {
    try{
        console.log('fetched')
        const items = await itemModel.find()
        res.json(items)
        // res.send({message: 'working'})
    }catch(err){
        console.log(err);
        res.json({message: err})
    }
} 

export const createNewItem = async(req, res) =>{
    try{
        const newItem = req.body
        const item = new itemModel(newItem)
        item.save()
    }catch(err){
        console.log(err);
        res.json({message: err})
    }
}