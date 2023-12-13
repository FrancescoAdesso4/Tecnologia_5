var express = require('express');
var app = express();

const path = require('path');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'macchine.html')); // __dirname :ritorna la cartella del progetto 
});
app.get('/utilitarie', function(req, res) {
    res.sendFile(path.join(__dirname, 'utilitarie.html')); // __dirname :ritorna la cartella del progetto 
});
app.get('/sportive', function(req, res) {
    res.sendFile(path.join(__dirname, 'sportive.html')); // __dirname :ritorna la cartella del progetto 
});

app.listen(3000, function() {
    console.log('Exemple app listening on port 3000!');
});
