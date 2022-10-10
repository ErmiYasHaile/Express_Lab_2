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

 // Tip Calculator
// Your app should have a route of '/tip'and it should
// expect 2 params. One should be totaland one
// should be tipPercentage

app.get('/tip/:total/:tipPercentage',(req, res)=>{
    let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    res.send(`${tip}`+ " is the tip you will give.")
})

app.listen(3000,()=>{
    console.log(`listening on port 3000...`)
})