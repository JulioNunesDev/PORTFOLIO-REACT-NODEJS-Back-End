const express = require('express')
const { find } = require('./models/opinios')
const app = express()
require('./config/database')
const OpiniosDate = require('./models/opinios')




app.use(express.json())





app.get('/opinio', async(req, res)=>{

    OpiniosDate.find({},(error, result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.post('/opinios', async(req, res)=>{
    const {name, urlImg, message}= req.body

    const newOpinion = new OpiniosDate({name: name, urlImg:urlImg, message: message})

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

