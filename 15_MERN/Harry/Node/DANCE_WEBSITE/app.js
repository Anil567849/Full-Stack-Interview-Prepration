const express = require('express')
const path = require('path')
const app = express()
const port = 3000


const bodyParser = require("body-parser");

// mongoose 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/contactDance');
}

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String  
});

const Contact = mongoose.model('contact', contactSchema);


// EXPRESS
app.use('/static', express.static('static')) //for serving static files 




// PUG 
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.status(200).render('index.pug')
})


app.get('/contact', function (req, res) {
    res.status(200).render('contact.pug')
})

app.post('/contact', function (req, res) {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.status(200).send("data saved");
    }).catch(()=>{
        res.status(404).send("data not saved");
    });
})


    // ENDPOINTS 
app.get('/', (req, res) => {
  res.send('Hello World!')
})







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})