import mongoose from "mongoose";

const itemScheme = mongoose.Schema({
    title: {type: String, required:true}, 
    finished: {type: Boolean, default: false}, 
    created: {type: Date, default: new Date()}, 
})

const itemModel = mongoose.model('item', itemScheme)

export default itemModel