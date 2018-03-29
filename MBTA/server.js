const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'b97fb362737d7b89cb9f83f3e0753b51';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  //let city = req.body.city;
  let url = 'https://api-v3.mbta.com/predictions?sort=arrival_time&filter%5Bstop%5D=70145&filter%5Broute%5D=Green-B'

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {      
      
      let mbta = JSON.parse(body)
  	  console.log(mbta.data[0].attributes.arrival_time);
      let arrival_BU_Central = mbta.data[0].attributes.arrival_time; 
      var sub = arrival_BU_Central.substring(11,16);
      
      if(mbta.data == undefined){
        res.render('index', {weather: null, error: 'Error, MBTA servers are down'});
      } else {
        let weatherText = `The next train to BU Central (Outbound) will arrive at: ${sub}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
  
  
  
})

// extra code down here. not needed but for my own reference.
var options = { method: 'GET',
  url: 'https://api-v3.mbta.com/predictions',
  qs: 
   { sort: 'arrival_time',
     'filter[stop]': '70145',
     'filter[route]': 'Green-B',
     'filter%5Broute%5D': 'Green-B',
     'filter%5Bstop%5D': '70145' },
  headers: 
   { 'Postman-Token': 'c44f8e26-f71d-4709-ac4c-7b6f6d452ebb',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  
  let mbta = JSON.parse(body)
  console.log(mbta.data[0].attributes.arrival_time);
  let arrival_BU_Central = mbta.data[0].attributes.arrival_time; 

  console.log(body);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})