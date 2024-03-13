// John Miles Ramos
// CMSC 100 U5L - Web Server with ExpressJS

import express from 'express';
import { appendFileSync,readFile } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received

// GET Endpoint Homepage /
app.get('/', (req, res) => {
    res.send('Hello!'); // the server responds with 'Hello!'
});

// GET Endpoint for /greeting
app.get('/greeting', (req, res) => {   // Hello + provided name in the query
  res.send('Hello ' + req.query.name); //can be added to post 
});

// GET Endpoint for /find-by-author
// Server reads books.txt and sends all books written by the author provided from req.query.author
app.get('/find-by-author', (req,res) => {
  readFile('books.txt', 'utf8', (err,data) =>{
    if (err) throw err;

    var lines = data.split('\n');
    var result=[];

    lines.forEach(line => {
      var line_element = line.split(',');

      if(line_element.indexOf(req.query.author) == 2){
        console.log('Found it: ' + line);
        result.push(line);
      }
    });
    res.send(result);
  });
});

// GET Endpoint for /find-by-isbn-author
// Server reads books.txt and sends all books that match the ISBN and author provided from req.query
app.get('/find-by-isbn-author', (req, res) => {
  const { isbn, author } = req.query;

  readFile('books.txt', 'utf8', (err, data) => {
      if (err) throw err;

      var lines = data.split('\n');
      var result = [];

      lines.forEach(line => {
          var line_element = line.split(',');

          if(line_element[1] === isbn && line_element[2] === author){
              console.log('Found it: ' + line);
              result.push(line);
          }
      });
      res.send(result);
  });
});

//POST Endpoint for adding a book
// The server receives a book in the req.body and writes it to books.txt
app.post('/add-book', (req, res) => {  //POST; {name: 'Harry Potter'}
  const { name, isbn, author, year } = req.body;

  //Writing into text file
  if (name && isbn && author && year){
    // Let the data be written to books.txt
    let data = `${name},${isbn},${author},${year}\n`;
    // Append the data to users.txt
    appendFileSync('books.txt', data);
  // The server responds with an object indicating whether the book was successfully added  
    res.send({ success: true });
  }
  else {
    res.send({ success: false });
  }

});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );

/*Expected Output:
Server started at port 3000
Found it: Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997
Found it: Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997
Found it: Harry Potter and the Chamber of Secrets,0-7475-3849-2,J.K Rowling,1998*/