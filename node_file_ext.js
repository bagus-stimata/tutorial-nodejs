function readWriteFile(){
    /*
    Latihan
    1. Cek File
    2. Open File
    3. Read File
    4. Write File
    */

    var fs = require("fs");
    var fileName_ = 'input.txt';
    fs.stat(fileName_, function (err, stats) {
    if (err) {
        return console.error(err);
    }

    //1. Cek File is Exist
    if (stats.isFile) {
        //2. Open File
            fs.open(fileName_, 'r+', function(err, fd) {
                    if (err) {
                        return console.error(err);
                    }

                    fs.appendFile(fileName_, '>> ini yang ditambahkan #\n', function (err) {
                    if (err) throw err;
                        console.log('The "data to append" was appended to file!');                    
                    });
    
                    // Close the opened file.
                    fs.close(fd, function(err) {
                        if (err) {
                        console.log(err);
                        } 
                        console.log("File closed successfully.");
                    });                
            });   
    }
    
    });
}

readWriteFile();