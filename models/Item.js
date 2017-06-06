var mongoose = require('mongoose')

var ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    condition: {
        type: String,
        default: 'Excellent'
    },
    location: {
        type: String,
        default: 'Killeen, TX'
    },
    age: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    negotiable: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('ItemSchema', ItemSchema)