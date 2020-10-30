const mongoose = require('mongoose');

const ProprietarioSchema = new mongoose.Schema({
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