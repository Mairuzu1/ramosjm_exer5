import express from 'express';

// instantiate the server
const app = express();

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.get('/', (req, res) => {
    //console.log(req);
    //console.log(res);
    res.send('Hello!');
});

app.get('/greeting', (req, res) => {
  res.send('Hello ' + req.query.name);
});

app.post('/submit-data', (req, res) => {
    res.send('Received a POST request.');
  });

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );