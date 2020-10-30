const { models } = require('../infrastructure/mongo');

const Login = async (email, senha) => {
    return await models.Usuario.findOne({email, senha})
        .populate('cliente')
        .populate('proprietario');
};

const Create = async (usuario) => {
    return await models.Usuario.create(usuario);
};

const AddCliente = (id, clienteId) => {
    return models.Usuario.findByIdAndUpdate(id, { cliente: clienteId }, { new: true })
        .populate('cliente');
}

const AddProprietario = (id, proprietarioId) => {
    return models.Usuario.findByIdAndUpdate(id, { proprietario: proprietarioId }, { new: true })
        .populate('proprietario');
}


module.exports = { Login, Create, AddCliente, AddProprietario };