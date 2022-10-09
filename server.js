const express = require('express')
const app = express()


// Greetings
// Make a route '/greeting'that sends 
// a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (req, res)=>{
    res.send('Hello, strangers')
})
// Give the greetingroute a param /:name
 app.get('/greeting/:name',(req, res)=>{
    res.send("What's up", + "  " + req.params.name)
 })

app.listen(3000,()=>{
    console.log(`listening on port 3000...`)
})