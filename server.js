const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req,res) => {res.send('Good Bye')})

app.get('/hello/:name', (req,res) => {
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})

app.get('/test', (req,res) => {
    //res.send ('I will send a file');
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/movies', (req,res) => {
    const movies = [
    {
    "Title":"Avengers: Infinity War",
    "Year":"2018",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
    "Title":"Captain America: Civil War",
    "Year":"2016",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZ"
    }]
    res.status(200).json({ 
        message: "Everything is good",
        myMovies:movies
    })
    //res.send('my api')
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/name', (req,res) =>{
    console.log('post called');
    console.log(req.body.fname);

    res.send("Hello from post " +
    req.body.fname + ' '+
    req.body.lname);
})

app.get('/name',(req,res) => {
    console.log('route calling');

    console.log(req.query.lname);

    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))