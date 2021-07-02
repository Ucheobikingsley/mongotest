const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    subject:String,
    location:String,
    price:Number,
    inventory:Number
})

const data = mongoose.model('data',blogSchema);

module.exports = data;