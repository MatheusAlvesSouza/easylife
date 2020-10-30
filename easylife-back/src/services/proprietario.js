const { models } = require('../infrastructure/mongo');

const FindById = (id) => {
    return models.Proprietario.findById(id).populate('fotos');
}

const GetAll = () => {
    return models.Proprietario.find();
}

const Create = (proprietario) => {
    return models.Proprietario.create(proprietario);
}

module.exports = { Create, FindById, GetAll };