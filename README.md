## Web Server with ExpressJS

A requirement fulfilled for course CMSC 100

Made by John Miles Ramos / BSCS

## To create your own:

[1] Clone the repository to your preferred directory
Make sure to have the following in your package.json

    "type":"module"

[2] Install the following inside your directory

    npm install express 
    npm install needle

[3] Make sure that **server.js** is running first before requesting and that **books.txt** must be empty first to function correctly

[4] Create .GITIGNORE

     node_modules/*

## Expected output:

For **server.js**

    Server started at port 3000
    Found it: Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997
    Found it: Harry Potter and the Philosopher’s Stone,978-0-7475-3269-9,J.K Rowling,1997
    Found it: Harry Potter and the Chamber of Secrets,0-7475-3849-2,J.K Rowling,1998

For **request.js**

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

Additional Note:
For *The Little Prince,978-0156012195,AntoineSaint-Exupery,1943* to appear in the terminal, add a query in request.js like the following

    needle.get('http://localhost:3000/find-by-author?author=AntoineSaint-Exupery', (err, res) => {
    console.log(res.body);  
    });
