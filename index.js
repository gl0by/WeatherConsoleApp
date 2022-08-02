const https = require('node:https');
const fs = require('fs');

https.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=130&appid=a2447cc75255e17ec76e48f8e41200b9', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        fs.writeFile('data.json', d, (err) => {
            if (err) {
                console.log('error:', err);
                return
            }
        });
    });

}).on('error', (e) => {
    console.error(e);
  });