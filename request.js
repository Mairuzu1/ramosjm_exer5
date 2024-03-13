import needle from 'needle';

//needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
needle.get('http://localhost:3000', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});
needle.get('http://localhost:3000/find-by-isbn-author', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.get('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

//needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
//    console.log(res.body);   // prints the body of the response message. In this case, “Hello”

needle.get('http://localhost:3000/greeting?name=Miles', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

/*needle.post(
    'http://localhost:3000/submit-data',
    { name: 'Monina' },   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
  ); */

//---------------------------------//

needle.post(
    'http://localhost:3000/add-book',
    { name: "Harry Potter and the Philosopher’s Stone",
    isbn: '978-0-7475-3269-9',
    author: 'J.K Rowling',
    year: '1997'},   // can be an object or a string
    /*{ isbn: '978-0-7475-3269-9'},
    { author: 'J.K Rowling'},
    { year: '1997'},*/
    (err, res) => {
      console.log(res.body);
    }
  );  

needle.post(
    'http://localhost:3000/add-book',
    { name: "Harry Potter and the Chamber of Secrets",
    isbn: '0-7475-3849-2',
    author: 'J.K Rowling',
    year: '1998'},   // can be an object or a string
    /*{ isbn: '0-7475-3849-2'},
    { author: 'J.K Rowling'},
    { year: '1998'},*/
    (err, res) => {
      console.log(res.body);
    }
  ); 
  
needle.post(
    'http://localhost:3000/add-book',
    { name: "The Little Prince" },   // can be an object or a string
    /*{ isbn: '978-0156012195'},
    { author: 'Antoine Saint-Exupery'},
    { year: '1943'},*/
    (err, res) => {
      console.log(res.body);
    }
  );