const express = require('express');
const format = require('date-format');
const app = express();

const port = 4000 || process.env.PORT;

app.get('/', (req, res)=>{
   res.status(200).send("giving you a status code")
})

app.get('/api/v1/instagram', (req, res)=>{
    const instagram = {
        username: "Nithya",
        followers: 50,
        follows: 100,
        date: format.asString("dd MM yy hh:mm:ss")
    }

    res.status(200).json(instagram);
 })
 app.get('/api/v1/facebook', (req, res)=>{
    const facebook = {
        username: "Nithya-fb",
        followers: 50,
        follows: 100,
        date: format.asString("dd MM yy hh:mm:ss")
    }

    res.status(200).json(facebook);
 })
 app.get('/api/v1/linkedin', (req, res)=>{
    const linkedin = {
        username: "Nithya-li",
        followers: 50,
        follows: 100,
        date: format.asString("dd MM yy hh:mm:ss")
    }

    res.status(200).json(linkedin);
 })

 app.get('/api/v1/:whatever',(req, res)=>{
    res.status(200).json({
        param: req.params.whatever
    })
})
app.listen(port, () =>{
    console.log(`Server started listening to ${port}`)
})