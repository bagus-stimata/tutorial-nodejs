
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index_form.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // if (!req.files || Object.keys(req.files).length === 0) {
   //    res.status(400).send('No files were uploaded.');
     
   // }else {
   //    console.log('req.files >>>', req.files); // eslint-disable-line
   // }

   // Prepare output in JSON format:: cara mengambil pakai post ya
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(req + " >> " + response);
   res.end(JSON.stringify(response));
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})