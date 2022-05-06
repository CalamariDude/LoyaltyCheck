const express = require('express');
const http = require('http');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const engine = require('consolidate')

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));

// incoming messages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static html
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engine.mustache);
app.use(express.static('./public/'));

// start http server
const port = 80;
let server = http.createServer(app).listen(port);

// start https server
let sslOptions = {
   key: fs.readFileSync('../key.pem'),
   cert: fs.readFileSync('../cert.pem')
};


app.get('/', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    return res.render('index.html')
});

app.get('/form', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    return res.render('form.html')
});

// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404
    console.log(err)
});

app.set('port', process.env.PORT || 80)

let serverHttps = https.createServer(sslOptions, app).listen(443)
