var fs = require('fs');


const data = {
  "abc": 3,
  "fcd": {
    "asd": "teres"
  }
}
var json = JSON.stringify(data, null, 2);

fs.writeFile('data.json', json, 'utf8', finished);

function finished(err) {
  console.log('Finished writing json');
}