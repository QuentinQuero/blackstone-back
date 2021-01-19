var mongoose = require('mongoose')

const DefiSchema  = new mongoose.Schema({
    title: String,
    description: String
})

const Defi = mongoose.model('defis', DefiSchema)

module.exports = Defi;
