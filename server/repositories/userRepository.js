const User = require('../models/user')
const bcrypt = require('bcrypt')


const findUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        User.findOne({ username }, async (err, item) => {
            try{
                resolve(item)
            } catch (error) {
                reject(error)
            }
        })
    })
}

const findUserByCreds = (username, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({ username }, async (err, item) => {
            try {
                if(!item) throw 'USER_NOT_FOUND'
                let checkPassword = await bcrypt.compare(password, item.password)

                if(!checkPassword) throw 'WRONG_PASSWORD'

                resolve(item)
            } catch (e) {
                reject(e)
            }
        })
    })
}

module.exports = {
    findUserByUsername,
    findUserByCreds
}