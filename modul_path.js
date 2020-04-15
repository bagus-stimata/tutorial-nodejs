var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// AbsolutePath
console.log('dirname (mendapatkan nama direktory) : ' + path.isAbsolute('main.js'));

// Dirname
console.log('dirname (mendapatkan nama direktory) : ' + path.dirname('main.js'));

// Resolve
console.log('resolve (mendapatkan nama path): ' + path.resolve('main.js'));


// extName
console.log('ext name : ' + path.extname('main.js'));