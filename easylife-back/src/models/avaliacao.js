const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
    estrelas: {
        type: Number,
        required: true
    },

    comentario: {
        type: String,
        required: false
    },

    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },

    proprietarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietario',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);