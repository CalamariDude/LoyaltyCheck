var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));

var engine = require('consolidate')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engine.mustache);
app.use(express.static('./public/'));

app.get('/', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    return res.render('index.html')
});

// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404
    console.log(err)
});

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
    console.log('server running on ', server.address().port);
});
