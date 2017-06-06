var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
    find: function(params, isRaw){
        return new Promise(function(resolve, reject){
            Profile.find(params, function(err, profiles){
                if(err){
                    reject(err)
                    return
                }

                // login condition
                if(isRaw){
                    resolve(profiles)
                    return
                }

                resolve(profiles)
            })
        })
    },

    findById: function(id){
        return new Promise(function(resolve, reject){
            Profile.findById(id, function(err, profile){
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    },

    create: function(params){
        return new Promise(function(resolve, reject){
            // hash password
            var password = params.password
            params['password'] = bcrypt.hashSync(password)
            Profile.create(params, function(err, profile){
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    }
}