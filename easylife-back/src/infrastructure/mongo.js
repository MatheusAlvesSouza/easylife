const mongoose = require('mongoose');

const models = {
    Usuario: require('../models/usuario'),
    Cliente: require('../models/cliente'),
    Favorito: require('../models/favorito'),
    Proprietario: require('../models/proprietario'),
    Foto: require('../models/foto'),
    Avaliacao: require('../models/avaliacao')
};

const connect = () => {
    return mongoose.connect("mongodb://mongo:27017/easylife", {
        useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false
    });
}

module.exports = { connect, models };