// Start the server first before requesting
// books.txt must be empty first to function correctly

/*Expected Output:
Hello!
Hello Miles
{ success: true }
{ success: true }
{ success: true }
[
  'Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997' 
]
[
  'Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997',
  'Harry Potter and the Chamber of Secrets,0-7475-3849-2,J.K Rowling,1998'      
]
*/
import needle from 'needle';

//needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
needle.get('http://localhost:3000', (err, res) => {
    console.log(res.body);   
    // Hello!
    // Response from GET '/'
});

needle.get('http://localhost:3000/greeting?name=Miles', (err, res) => {
    console.log(res.body);   
    // Hello Miles
    // Response from GET '/greeting'
});

//-----------------------//

/*needle.get('http://localhost:3000/find-by-isbn-author', (err, res) => {
    console.log(res.body);   
});*/

//-----------------------//

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', (err, res) => {
    console.log(res.body);   
    //'Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997' 
    // Response from GET '/find-by-isbn-author'
});

//-----------------------//

/*needle.get('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);   
});*/

//-----------------------//


needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
    console.log(res.body);  
  //'Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997',
  //'Harry Potter and the Chamber of Secrets,0-7475-3849-2,J.K Rowling,1998'  
  // Response from GET '/find-by-author'    
});

needle.post(
    'http://localhost:3000/add-book',
    { name: "Harry Potter and the Philosopher’s Stone",
      isbn: '978-0-7475-3269-9',
      author: 'J.K Rowling',
      year: '1997'}, 
    (err, res) => {
      console.log(res.body);
      // { success: true }
    }
  );  

needle.post(
    'http://localhost:3000/add-book',
    { name: "Harry Potter and the Chamber of Secrets",
      isbn: '0-7475-3849-2',
      author: 'J.K Rowling',
      year: '1998'},   // can be an object or a string
    (err, res) => {
      console.log(res.body);
      // { success: true }
    }
  ); 
  
needle.post(
    'http://localhost:3000/add-book',
    { name: "The Little Prince",
      isbn: '978-0156012195',
      author: 'AntoineSaint-Exupery',
      year: '1943' },   // can be an object or a string
    (err, res) => {
      console.log(res.body);
      // { success: true }
    }
  );