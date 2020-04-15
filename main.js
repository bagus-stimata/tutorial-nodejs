

// buf = new Buffer(256);
// len = buf.write("Simply Easy Learning");

// console.log("Octets written : "+  len + " >> " + buf.toString('utf8', 0, len) );

new_buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    new_buf[i] = i + 97;
}

console.log( new_buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( new_buf.toString('ascii',0,5));   // outputs: abcde
console.log( new_buf.toString('utf8',0,5));    // outputs: abcde
console.log( new_buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde