let textAnalysis = {};

// Bring in environment variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

// Aylien setup
var aylien = require('aylien_textapi')
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

function callAylien(text) {
  return new Promise(resolve => {
    textapi.sentiment({
      'url': text
    }, function(error, response) {
      if (error === null) {
        resolve(response);
      }
    });
  });
}

const getAylienData = async(req, res)=> {
  let data = await callAylien(req.body.text);
  try {
    textAnalysis = data;
    res.send('posted');
  } catch(error) {
    console.log(error);
  }
}

app.post('/post-data', getAylienData);
app.get('/get-data', function (req, res) {
  res.send(textAnalysis);
});
