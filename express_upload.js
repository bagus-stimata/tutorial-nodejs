
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
//var multer  = require('multer');

// app.use(express.static('public'));


// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(multer({ dest: '/tmp/'}));
// app.use(multer({ dest: 'uploads/'}), function(err) {
//     //Harus ditambahka funtion error
// });

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {
   if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
   }
   console.log('req.files >>>', req.files); // eslint-disable-line

   // console.log(req.files.file_1.name);
   // console.log(req.files.file_1.path);
   // console.log(req.files.file_1.type);
   // var file = __dirname + "/" + req.files.file_1.name;
  
   // fs.readFile( req.files.file_1.path, function (err, data) {
   //    fs.writeFile(file, data, function (err) {
   //       if( err ) {
   //          console.log( err );
   //          } else {
   //             response = {
   //                message:'File uploaded successfully',
   //                filename:req.files.file_1.name
   //             };
   //          }
         
   //       console.log( response );
   //       res.end( JSON.stringify( response ) );
   //    });
   // });


})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})