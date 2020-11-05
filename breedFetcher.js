const request = require('request');

const breed = process.argv.slice(2,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (body !== '[]' && error === null && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else if (body === '[]') {
    console.log('Error:', `${breed} is an invalid breed name.`);
  } else {
    console.log('Error: Something went wrong.', response.statusCode, response.statusMessage);
  }
  
});