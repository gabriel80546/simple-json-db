// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//    res.send("Hello world!");
// });

// const https = require('https')
// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()

const http = require('http');

http.get('http://localhost:27001/', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    // console.log(JSON.parse(data).explanation);
    console.log("data: ", data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});






//app.listen(3000);
