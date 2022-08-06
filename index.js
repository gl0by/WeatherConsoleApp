const https = require('node:https');
const fs = require('fs');

let bank = new Object();

https.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=130&appid=a2447cc75255e17ec76e48f8e41200b9', (res) => {
    console.log('statusCode:', res.statusCode);

    res.on('data', (d) => {
        fs.writeFileSync('data.json', d, (err) => {
            if (err) {
                console.log('error:', err);
                return
            }
        });
    });

}).on('error', (e) => {
    console.error(e);
  });

bank = JSON.parse(fs.readFileSync('data.json'));

console.log(
    "CITY: " + bank.name,
    "Temperature: " + ((bank.main.temp - 273.15).toFixed(2)),
    "Feels like: " + ((bank.main.feels_like - 273.15).toFixed(2))
);