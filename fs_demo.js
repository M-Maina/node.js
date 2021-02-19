const fs = require('fs');
const path = require('path')



// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World!',
//     err => {
//         if (err) throw err;
//         console.log('File written...');
//     }
// );

// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Have come to love node.js',
//     err => {
//         if (err) throw err;
//         console.log('File written...');
//     }
// );

// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'learning.txt'), (err) => {
//         if (err) throw err;
//         console.log('done');
//     }
// );