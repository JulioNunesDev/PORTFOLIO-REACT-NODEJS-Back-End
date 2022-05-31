const mongoose = require('mongoose')



const BooksSchema = new mongoose.Schema({
    
    imgUrl: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},


}) 


const Books = mongoose.model("bookData", BooksSchema)

module.exports = Books