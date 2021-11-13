var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/form.html');
});

app.post('/receber', function(req, res) {
    const dadosJSON = JSON.stringify(req.body);
    res.write(dadosJSON);
    res.end();
});

app.listen(27001);
