var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('ProfileSchema', ProfileSchema)