/*
TUTORIAL READ & WRITE DATA
*/
// var fs = require("fs");


// var theData = '';
// var readStream = fs.createReadStream('inputOutput.txt');
// readStream.setEncoding('UTF8');

// readStream.on('data', function(chunk) {
//     theData += chunk;
// });

// readStream.on('end', function(){
//     console.log("Pembacaan pertama >> " + theData);
//     if (theData=='') console.log("( kosong )");
// });

// readStream.on('error', function(err){
//     console.log(err.stack);
// });



var fs = require("fs");

// Asynchronous read
// fs.readFile('inputOutput.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read (dibaca belakangan): " + data.toString());
// });

// Synchronous read
var data = fs.readFileSync('inputOutput.txt');
console.log("Synchronous read (dibaca duluan): " + data.toString());

var theData = data.toString();

console.log(theData);

/*
Write ke file inputOutput.txt
*/

if (theData=='') console.log("( kosong )");
var dataAdded = theData + " >> Tambahan ";

var fs = require("fs");
var writeStream = fs.createWriteStream('inputOutput.txt');
writeStream.write(dataAdded, 'UTF8');
writeStream.end();

writeStream.on('finish' , function(){
    console.log('########## Log Selesai Write ##########');
});
writeStream.on('error', function(err){
    console.log(err.stack);
});

/*
Read Lagi
- Walaupun read lagi, tetap harus mendefinisikan readStream Lagi
- Jadi createReadStream adalah sekali pakai
*/
var theData = '';
var readStream = fs.createReadStream('inputOutput.txt');
readStream.setEncoding('UTF8');
readStream.on('data', function(chunk) {
    theData += chunk;
});

readStream.on('end', function(){
    console.log("Dibaca Lagi: " + theData);
});

readStream.on('error', function(err){
    console.log(err.stack);
});

/*
Kesimpulan streamRead dan streamWrite tidak bisa digunakan secara bersamaan
*/