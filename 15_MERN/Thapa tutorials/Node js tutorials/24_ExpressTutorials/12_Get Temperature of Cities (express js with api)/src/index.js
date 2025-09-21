const express = require('express');
const path = require('path');
const requests = require('requests');
const app = express();

// to set view engine 
app.set('view engine', 'hbs');

const viewPath = path.join(__dirname, "../myviews/views");
app.set("views", viewPath);


app.get('/', (req, res) => {
    const city = req.query.name;
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94a7856e6ca89d09463bf5b8e65d0023`)
        .on('data', function (chunk) {
            // console.log(chunk)

            const objData = JSON.parse(chunk);

            const arrData = [objData];

            res.send(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp} <span> &deg; </span> C`);

        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
        
        console.log('end');
    });
})


app.listen(8000, () => {
    console.log('listening 8000');
})