const https = require('https');
const fs = require('fs');

var options = {
  host: 'https://api.openweathermap.org',
  path: '/data/2.5/weather?lat=51&lon=0.01&appid=a2447cc75255e17ec76e48f8e41200b9'
};

var str = '';

callback = function(res) {

  res.on('data', function (chunk) {
    str += chunk;
  });

  res.on('end', function () {
    console.log(str);
  });

  res.on('error', function (err) {
    console.log(err);
  });

}

https.request('https://api.openweathermap.org/data/2.5/weather?lat=51&lon=0.01&appid=a2447cc75255e17ec76e48f8e41200b9', callback).end();

fs.writeFileSync('/data.json', str, (err) => {
    if (err) {
        console.log('error:', err);
        return
    }
  });