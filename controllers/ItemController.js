var Item = require('../models/Item');

module.exports = {
    // find all items
    find: function (params, callback) {
        Item.find(params, function (err, items) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, items)
        })
    },
    // find one item by id
    findById: function (id, callback) {
        Item.findById(id, function (err, item) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, item)
        })
    },
    // create a new item
    create: function (params, callback) {
        Item.create(params, function (err, item) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, item)
        })
    },

    // update item information by id
    update: function (id, params, callback) {
        Item.findByIdAndUpdate(id, params, {new:true}, function(err, item){
            if(err){
                callback(err, null)
                return
            }
            callback(null, item)
        })
    },
    // delete item
    delete: function (id, callback) {
        Item.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}