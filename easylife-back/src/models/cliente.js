const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    deficiencias: {
        type: [Number],
        required: true,
    },

    favoritos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Favorito',
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });

module.exports = mongoose.model('Cliente', ClienteSchema);