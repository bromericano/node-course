const fs = require('fs');
// const book = {
//     title: 'Name of the Wind',
//     author: 'Patrick Rothfuss'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-JSON.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Luke";
data.age = 28;
fs.writeFileSync('1-json.json', JSON.stringify(data));
