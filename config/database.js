const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.DATABASE_USER
const password = process.env.DATABASE_KEY
mongoose.connect(`mongodb+srv://${user}:${password}@apicluster.geygt.mongodb.net/BooksDate?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})
.then(()=>{
    

    console.log('banco de dados on!')


})



