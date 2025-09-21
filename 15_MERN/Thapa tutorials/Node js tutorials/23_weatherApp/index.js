const http = require('http');
const fs = require('fs');
var requests = require('requests');


const homeFile = fs.readFileSync('index.html', 'utf-8');

const replaceValFunc = (tempVal, originalVal) => {
    let temperature = tempVal.replace("{%tempVal%}", originalVal.main.temp);
    temperature = temperature.replace("{%tempMin%}", originalVal.main.temp_min);
    temperature = temperature.replace("{%tempMax%}", originalVal.main.temp_max);
    temperature = temperature.replace("{%tempLocation%}", originalVal.name);
    temperature = temperature.replace("{%tempCountry%}", originalVal.sys.country);
    temperature = temperature.replace("{%tempStatus%}", originalVal.weather[0].main);
    return temperature;
};

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=manali&appid=94a7856e6ca89d09463bf5b8e65d0023").on('data', function (chunk) {

            // console.log(chunk);

            // convert json to object 
            const objData = JSON.parse(chunk);

            // convert object to array of object 
            const arrObj = [objData];

            console.log(arrObj);

            const realTimeData = arrObj.map((val) => replaceValFunc(homeFile, val)).join("");

            res.end(realTimeData);

            })
            .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
                
            console.log('end');
        });
    }
});


server.listen(8000, '127.0.0.1');