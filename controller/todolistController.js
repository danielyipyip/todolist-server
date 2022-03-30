import express from 'express'

export const gettodoList = async (req, res) => {
    try{
        res.json({message: 'get list'})
    }catch(err){
        console.log(err);
    }
} 