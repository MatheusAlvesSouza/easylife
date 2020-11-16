const { models } = require('../infrastructure/mongo');

const CalculateAverage = async (proprietarioId) => {
    var avaliacoes = await models.Avaliacao.find({proprietarioId});

    let count = 0;
    
    if (avaliacoes.length == 0)
        return 3;
        
    avaliacoes.forEach(avaliacao => {
        count += avaliacao.estrelas;
    });

    return count / avaliacoes.length;
}

const Create = (avaliacao) => {
    return models.Avaliacao.create(avaliacao);
}

const FindByProprietarioId = (id) => {
    return models.Avaliacao.find({proprietarioId: id});
}


module.exports = { CalculateAverage, Create, FindByProprietarioId };