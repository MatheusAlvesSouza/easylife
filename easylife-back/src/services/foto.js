const { models } = require('../infrastructure/mongo');

const FindByProprietarioId = (id) => {
    return models.Foto.find({proprietario: id}).populate('proprietario');
}

const Create = async (foto) => {

    const foto = await models.Foto.create(foto);

    await models.Proprietario.updateOne(
        {_id: foto.proprietario},
        { $push: { fotos: foto._id}}
    );

    return foto;
}

module.exports = { Create, FindByProprietarioId };