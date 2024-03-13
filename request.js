import needle from 'needle';

//needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
needle.get('http://localhost:3000/greeting?name=Miles', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});