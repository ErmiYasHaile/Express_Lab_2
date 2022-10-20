const express = require('express')
const app = express()
//nice job connecting your / route to /:number_of_bottles
app.get('/',(req, res)=>{
    res.send(`99 Bottles of beer on the wall
    <html>
    <body>
    <a href='/98'> take one down, pass it around </a>
    </body>
    </html>

    `)
})
 app.get('/:number_of_bottles', (req, res)=>{
    parseInt(req.params.number_of_bottles) -1;
    let down = parseInt(req.params.number_of_bottles)-1;
//great solution for starting the count over
    if(parseInt(req.params.number_of_bottles)===0){
        res.send(`99 bottle of beer on the wall
        <html>
        <body>
            <a href="/">take one down, pass it around</a>
        </body>
    </html>
        `)
    }


 res.send(` ${req.params.number_of_bottles} Bottles of beer on the wall
<html>
  <body>
      <a href="/${down}">take one down, pass it around</a>
  </body>
</html>
`)

})
app.listen(4000,()=>{
    console.log(`listening on port 4000...`)
})