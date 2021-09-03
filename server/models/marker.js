const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lat: {
        required: true,
        type: Number
    },

    lng: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('Marker', MarkerSchema)