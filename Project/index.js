var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', ('blood_donation'));
app.get('/', function (req, res) {
    res.render('blood_donation');
});
app.listen(8000);