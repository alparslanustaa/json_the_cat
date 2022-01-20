const request = require('request');
const arg = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

request.get(url, function(error, response, body) {
  if (error) {
    console.log('error found');
    return;
  }
  // console.log(typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  // let firstElement = data
  // console.log(firstElement);
  if (!data.length) {
    console.log("NO CAT NO LIFE");
  } else {
    console.log(data[0]);
  }
});
