const https = require('https');
const fs = require('fs');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'https://api.openweathermap.org',
  path: '/data/2.5/weather?lat=51&lon=0.01&appid=a2447cc75255e17ec76e48f8e41200b9'
};

callback = function(res) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  res.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  res.on('end', function () {
    console.log(str);
  });

  res.on('error', function (err) {
    console.log(err);
  });

  fs.writeFileSync('data.json', d, (err) => {
    if (err) {
        console.log('error:', err);
        return
    }
  });
}

https.request(options, callback).end();