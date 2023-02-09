//Schema for Channel-cards
const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    imgurl: String
});

module.exports = mongoose.model('cards', cardSchema);