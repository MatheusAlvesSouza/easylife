const mongoose = require('mongoose');

const ProprietarioSchema = new mongoose.Schema({
    nomeFantasia: {
        type: String,
        required: true,
    },

    tipoEstabelecimento: {
        type: String,
        required: true,
    },

    facilidades: {
        type: String,
        required: true,
    },

    descricao: {
        type: String,
        required: true,
    },

    horario: {
        type: String,
        required: true,
    },

    deficiencias: {
        type: [Number],
        required: true,
    },

    // Criar model cidade e estado
    endereco: {
        logradouro: String,
        numero: String,
        complemento: String,
        bairro: String,
        cep: String,
        cidade: String,
        latitude: Number,
        longitude: Number
    },

    fotos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Foto',
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });

module.exports = mongoose.model('Proprietario', ProprietarioSchema);