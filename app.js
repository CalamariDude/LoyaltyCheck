const express = require('express');
const http = require('http');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const engine = require('consolidate')

const app = express();

// view engine setup
app.engine('html', engine.mustache);

// incoming messages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// views and static pages
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public/'));


// routes
app.get('/', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    return res.render('index.html')
});

app.get('/form', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    return res.render('form.html')
});

app.post('/submit_form', function(req, res, next){
    console.log(req.body)
});

// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404
    console.log(err)
});


// start http server
const port = 80;
const httpsport = 443
let server = http.createServer(app).listen(port);
const is_prod = Process.env

// start https server
let sslOptions = {
   key: fs.readFileSync('../key.pem'),
   cert: fs.readFileSync('../cert.pem')
};
let serverHttps = https.createServer(sslOptions, app).listen(httpsport)