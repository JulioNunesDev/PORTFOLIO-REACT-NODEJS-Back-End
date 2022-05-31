const express = require('express')
const app = express()
require('./config/database')
const BooksDate = require('./models/books')
const cors = require('cors')





app.use(express.json())
app.use(cors())





app.get('/books', async(req, res)=>{

    BooksDate.find({},(error, result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.post('/books', async(req, res)=>{
    const urlImg= req.body.urlImg
    const title= req.body.title
    const description= req.body.description
    const body= req.body.body
    const author= req.body.author

const newBooks = new BooksDate({urlImg:urlImg, title: title, description: description, body: body, author: author})

    try {

        await newBooks.save()

        res.status(200).json({msg: 'messagem enviada'})

        
    } catch (error) {
      
     res.status(500).json({error:'error na req'})
       
    }

})



const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log('Rota aberta!')
})

