const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true,
    parameterLimit: 50000
}));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Autoriza a todos tipos de dispositivos usarem a API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//Tipo de requisições permitidas
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();

});

module.exports = { app };