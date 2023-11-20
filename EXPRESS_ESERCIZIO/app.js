var express = require('express');
var app = express();
/*app.get('/', function(req, res){
    res.send('index.html');
});*/
app.listen(3000, function() {
    console.log('Exemple app listening on port 3000!');
});

const path = require('path');
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html')); // __dirname :ritorna la cartella del progetto 
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'about.html')); // __dirname :ritorna la cartella del progetto 
});
app.get('/sitemap', function(req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.html')); // __dirname :ritorna la cartella del progetto 
});
