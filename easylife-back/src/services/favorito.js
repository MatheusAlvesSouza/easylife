const { models } = require('../infrastructure/mongo');

const FindByClienteId = (id) => {
    return models.Favorito.find({cliente: id})
        .populate({path: 'proprietario', model: 'Proprietario'})
        .exec((err, docs) => {
            models.Foto.populate(docs, {
                path: 'proprietario.fotos',
                model: "Foto"
              });
        });
}

const FindByClienteIdAndProprietarioId = (cliente, proprietario) => {
    return models.Favorito.find({cliente, proprietario});
}

const Create = (favorito) => {
    return models.Favorito.create(favorito);
}

const Delete = (proprietario, cliente) => {
    return models.Favorito.deleteOne({proprietario, cliente});
}

module.exports = { Create, Delete, FindByClienteId, FindByClienteIdAndProprietarioId };