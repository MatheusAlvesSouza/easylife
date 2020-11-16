const { models } = require('../infrastructure/mongo');

const FindByProprietarioId = (id) => {
    return models.Foto.find({proprietario: id}).populate('proprietario');
}

const Create = async (foto) => {

    const fotoDb = await models.Foto.create(foto);

    await models.Proprietario.updateOne(
        {_id: foto.proprietario},
        { $push: { fotos: fotoDb._id}}
    );

    return fotoDb;
}

module.exports = { Create, FindByProprietarioId };