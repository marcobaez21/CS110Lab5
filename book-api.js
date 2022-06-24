const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [];

app.use(cors());

app.use(bodyParser.urlencoded( {extended: false } ));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);
   // document.getElementById("myForm").reset();
   //res.send("WOW");   
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    
    for(let i=0; i<books.length;i++){
        let book = books[i];

        if(book.isbn === isbn){
            res.json(book); 
        }
    }  
});

app.post('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newBook = req.body;
    
    for(let i=0; i<books.length;i++){
        let book = books[i];

        if(book.isbn === isbn){
            books[i] = newBook;
        }
    }

    //res.send("Wow");   
});

app.get('/book/delete/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    
    for(let i=0; i<books.length;i++){
        let book = books[i];

        if(book.isbn === isbn){
            books.splice(i, 1);
            res.json(book); 
        }
    }  
});

app.post('/book/delete/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newBook = req.body;
    
    for(let i=0; i<books.length;i++){
        let book = books[i];

        if(book.isbn === isbn){
            books.splice(i, 1);
        }
    }

    //res.send("Wow");   
});

app.listen(port, () => console.log('Hello World, app listening on port'));