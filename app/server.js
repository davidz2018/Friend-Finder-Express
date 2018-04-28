var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 8080;


var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoder({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('app/public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT)
})