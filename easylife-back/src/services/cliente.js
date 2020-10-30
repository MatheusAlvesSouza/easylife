const { models } = require('../infrastructure/mongo');

const FindById = (id) => {
    return models.Cliente.findById(id);
}

const Create = (cliente) => {
    return models.Cliente.create(cliente);
}

module.exports = { Create, FindById };