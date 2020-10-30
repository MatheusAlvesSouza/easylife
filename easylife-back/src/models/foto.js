const mongoose = require('mongoose');

const FotoSchema = new mongoose.Schema({
    url: {
        type: String,
    },

    descricao: {
        type: String,
    },

    proprietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietario',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });

module.exports = mongoose.model('Foto', FotoSchema);