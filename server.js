import express from 'express';
import { appendFileSync,readFile } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received

// HOMEPAGE
app.get('/', (req, res) => {
    //console.log(req);
    //console.log(res);
    res.send('Hello!');
});

// localhost:3000/greeting
app.get('/greeting', (req, res) => {   // GET; ?name=Miles
  res.send('Hello ' + req.query.name); //can be added to post 
});

// Endpoint for /find-by-author
/*app.get('/find-by-author', (req,res) => {
  //res.send('Author' + req.query.author);
  readFile('book.txt', 'utf8', (err,data) =>{
    if (err) throw err;
    //console.log(data);

    var lines = data.split('\n');
    var result=[];

    lines.forEach(line) => {
      var line_element = line.split(',');

      if(line_element.indexOf(req.query.author) == 2){
        console.log('Found it: ' + line);
        result.push(line);
      }
    }*/

/* node request.js
// Received a POST request from Monina
app.post('/submit-data', (req, res) => {  //POST; {name: 'Monina'}
    res.send('Received a POST request from ' + req.body.name);
  });*/
 

//localhost:3000/add-book
app.post('/add-book', (req, res) => {  //POST; {name: 'Harry Potter'}
  res.send(req.body.name,req.body.isbn,req.body.author,req.body.year)
});

// Function to add books
function addBook([name, isbn, author, year]) {
  //Checks if all the fields are present: first name, last name, and email are non-empty strings
  // isEmail is added, and the age is at least 18
  if (name && isbn && author && year){
      // Let the data be written to books.txt
      let data = `${name},${isbn},${author},${year}\n`;
      // Append the data to users.txt
      appendFileSync('books.txt', data);
  }
} 
//res.send(req.body.name + req.body.isbn + req.body.author + req.body.year);

//Append to books.txt
addBook(["Harry Potter and the Philosopher’s Stone", "978-0-7475-3269-9", "J.K Rowling", 1997]);
addBook(["Harry Potter and the Chamber of Secrets", "0-7475-3849-2", "J.K Rowling", 1998]);
addBook(["The Little Prince", "978-0156012195", "Antoine Saint-Exupery", 1943]);

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );