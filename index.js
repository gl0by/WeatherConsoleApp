const https = require('https');
const fs = require('fs');

https.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=130&appid=a2447cc75255e17ec76e48f8e41200b9', (res) => {
    console.log(res);
})