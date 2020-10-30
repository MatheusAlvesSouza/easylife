const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    senha: {
        type: String,
        required: true,
    },

    telefones: {
        type: [String],
        required: true,
    },
    
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: false
    },

    proprietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietario',
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });

module.exports = mongoose.model('Usuario', UsuarioSchema);