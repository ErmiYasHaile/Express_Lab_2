const express = require('express')
const app = express()


// Greetings
// Make a route '/greeting'that sends 
// a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (req, res)=>{
    res.send('Hello, strangers')
})
// Give the greetingroute a param /:name
 app.get('/greeting/:Jimmy_boy',(req, res)=>{
    res.send("Wow! Hello there, " + "  " + req.params.Jimmy_boy + " on the page")
 })



app.listen(3000,()=>{
    console.log(`listening on port 3000...`)
})