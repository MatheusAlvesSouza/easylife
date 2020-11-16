const { models } = require('../infrastructure/mongo');

const FindById = (id) => {
    return models.Proprietario.findById(id).populate({path: 'fotos', model: 'Foto'});
}

const GetAll = () => {
    return models.Proprietario.find().populate({path: 'fotos', model: 'Foto'});
}

const FindByWord = (words, deficiencias) => {
    const word = words.replace(' ', '.');

    return models.Proprietario.find({
        $and: [{
            'deficiencias': { $in: deficiencias },
            $or: [
                {'nomeFantasia': new RegExp(word, 'i')},
                {'tipoEstabelecimento': new RegExp(word, 'i')},
                {'endereco.cidade': new RegExp(word, 'i')},
                {'endereco.logradouro': new RegExp(word, 'i')},
                {'endereco.bairro': new RegExp(word, 'i')},
            ],
        }]
    }).populate({path: 'fotos', model: 'Foto'});
}

const Create = (proprietario) => {
    return models.Proprietario.create(proprietario);
}

module.exports = { Create, FindById, GetAll, FindByWord};