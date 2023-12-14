const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Auto Sportive":[
           {
            "nome":"BMW M2",
            "potenza" :"460 CV" ,
            "alimentazione": "Benzina",
            "prezzo": "75000€",
            "immagine":"https://www.giltmagazine.it/wp-content/uploads/2023/01/BMW-M2.jpg"
           },
           {
            "nome":"911 Carrera 2 GTS",
            "potenza" :"480 CV" ,
            "alimentazione": "Benzina",
            "prezzo": "161.733,00 €",
            "immagine":"https://www.autoscout24.it/cms-content-assets/3Xqa6kBgUaDFCy4xvKsyFZ-3d891133a9d13e185208df70f42140d6-porsche-911-carrera-gts-front-1100.webp"
           },
           {
            "nome":"Ferrari 812 Competizione",
            "potenza" :" 830 CV" ,
            "alimentazione": "Benzina",
            "prezzo": "578.840,00 €",
            "immagine":"https://www.amalgamcollection.com/cdn/shop/articles/DSCF3121_1024x1024.jpg?v=1637595352"
           }
        ],
        "Auto utilitarie":[
           {
              "nome":"Peugeot 408",
              "potenza" :"129 CV" ,
              "alimentazione": "Benzina",
              "prezzo": "37.850€",
              "immagine":"https://www.autoscout24.it/cms-content-assets/5Qsyq6RuU5YkQbinCrdDoe-0d06743c3466aa61b7c08d5b9bb8fd78-as1-1100.webp"
           },
           {
            "nome":"Audi Q8",
            "potenza" :"231 CV" ,
            "alimentazione": "Benzina",
            "prezzo": "92.270,00 €",
            "immagine":"https://cdn.motor1.com/images/mgl/NrvvX/s1/abt-audi-q8-tfsi-e-mit-aero-package-2021.webp"
           },
           {
            "nome":"BMW M X5",
            "alimentazione": "Benzina",
            "potenza" :"625 CV" ,
            "prezzo": "160.000,00 €",
            "immagine":"https://www.bmw.it/content/dam/bmw/common/all-models/m-series/x5m/2023/highlights/bmw-m-series-x5-m-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674778625842.jpg"
           }
        ],
       
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});