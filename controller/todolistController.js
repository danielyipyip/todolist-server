import mongoose from 'mongoose';
import itemModel from '../models/todolistItem.js';

export const gettodoList = async (req, res) => {
    try{
        // console.log('start fetch')
        const items = await itemModel.find()
        
        res.json(items)
        // console.log('fetched')
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
        // console.log('added')
        res.json(item)
    }catch(err){
        console.log(err);
        res.json({message: err})
    }
}

export const getAItem = async(id) =>{
    try{
        if (!mongoose.isValidObjectId(id)) return ('cannot find the post')
        let item = await itemModel.findById(id)
        return item
        // console.log(item)
    }catch(err){
        console.log(err);
        return (err)
    }
}

export const updateChecked = async(req, res) =>{
    try{
        const {id}=req.params
        const item = await getAItem(id)
        item.finished = !item.finished
        item.save()
        // console.log(item)
        res.json(item)
    }catch(err){
        console.log(err);
        res.json({message: err})
    }
}

export const deleteItem = async(req, res) =>{
    try{
        const {id}=req.params
        if (!mongoose.isValidObjectId(id)) return res.status(404).json({message: 'cannot find the post'})
        await itemModel.findByIdAndDelete(id)
        res.json({message: 'Deleted item'})
    }catch(err){
        console.log(err);
        res.json({message: err})
    }
}