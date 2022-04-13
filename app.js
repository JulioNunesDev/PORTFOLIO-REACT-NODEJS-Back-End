const express = require('express')
const app = express()
require('./config/database')
const OpiniosDate = require('./models/opinios')
const cors = require('cors')





app.use(express.json())
app.use(cors())





app.get('/', async(req, res)=>{

    OpiniosDate.find({},(error, result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.post('/opinios', async(req, res)=>{
    const {urlImg}= req.body.urlImg
    const {name}= req.body.name
    const {message}= req.body.message

const newOpinion = new OpiniosDate({urlImg:urlImg, name: name, message: message})

    try {

        await newOpinion.save()
        res.status(200).json({msg: 'messagem enviada'})

        
    } catch (error) {
      

     res.status(500).json({error: error})
       
    }

})



const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log('Rota aberta!')
})

