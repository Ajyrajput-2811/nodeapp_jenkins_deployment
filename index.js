var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From DevOps" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.get('/json',function(req,res){
    res.send('{ "fname" : "Ajay", "lname" : "Rajput","student": "computer science"}');
})
app.listen(process.env.PORT || 3000);
module.exports = app;
