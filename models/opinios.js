const mongoose = require('mongoose')



const OpiniosSchema = new mongoose.Schema({
    urlImg: {type: String, required: true},
    name: {type: String, required: true},
    message: {type: String, required: true}

}) 


const opinios = mongoose.model("opinioData", OpiniosSchema)

module.exports = opinios