const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
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

module.exports = mongoose.model('Favorito', FavoritoSchema);