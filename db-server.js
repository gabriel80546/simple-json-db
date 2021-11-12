var express = require('express');
// const bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
//    res.send("Hello world!");
   res.sendFile(__dirname + '/form.html');
});

app.post('/receber', function(req, res) {
    const a = JSON.stringify(req.body);
    res.write(a);
    res.end();
});

app.listen(27001);
