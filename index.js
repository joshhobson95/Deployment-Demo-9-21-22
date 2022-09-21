const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

require('dotenv').config()

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})


app.listen(port, () =>{
    console.log('Docked at port'  +  port)
})