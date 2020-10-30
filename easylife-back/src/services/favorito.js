const { models } = require('../infrastructure/mongo');

const FindByClienteId = (id) => {
    return models.Favorito.find({clienteId: id}).populate('proprietario');
}

const Create = (favorito) => {
    return models.Favorito.create(favorito);
}

const Delete = (id) => {
    return models.Favorito.deleteOne({_id: id});
}

module.exports = { Create, Delete, FindByClienteId };