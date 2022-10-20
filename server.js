const express = require('express')
const app = express()


// Greetings
// Make a route '/greeting'that sends 
// a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (req, res)=>{
    res.send('Hello, strangers')
})
// Give the greetingroute a param /:name
// Give the greetingroute a param /:name
//you might find template literals `${} easier to use for string printouts`
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
// Magic 8 Ball
// Create a route of '/magic'that should expect a phrase in the 
// URL that ask the Magic 8 ball a question.

const magic8_quote = [
    "It is certain", 
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
]

app.get('/magic',(req, res)=>{

    res.send("")
})

//perfect use of the Math.random()
app.get("/magic/:whatever",(req, res)=>{
    let random = Math.floor( Math.random()*(magic8_quote.length))
    console.log(random)
    res.send(req.params.whatever.replaceAll('%20 ',' ') + " " + `${magic8_quote[random]}`)
})

// Hungry for more?
// Fibonacci
app.get('/:fibonacci', (req, res)=>{
    res.send()
})


app.listen(3000,()=>{
    console.log(`listening on port 3000...`)
})