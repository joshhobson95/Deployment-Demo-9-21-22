const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

require('dotenv').config()

const app = express()

app.use(express.json())
//THIS IS MIDDLEWARE TO SEND WHOLE FOLDER
//initial html file
app.use('/', express.static(path.join(__dirname, '..client/index.html')))
//then the whole folder
app.use(express.static(path.join(__dirname, '..client')))


//make sure that package.json and html src are correctly formatted



//THIS IS ENDPOINTS TO SEND INDIVIDUAL FILES
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..client/index.html'))
// })



// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/main.js'))
//   })
  


//
app.listen(port, () =>{
    console.log('Docked at port'  +  port)
})