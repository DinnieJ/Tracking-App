const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    try {
        const expireTime = Math.floor(Date.now() / 1000) + 60 * process.env.JWT_TTL

        return jwt.sign({ 
            data: { _id: user._id},
            exp: expireTime 
        }, process.env.JWT_SECRET)
    } catch (e) {
        throw e
    }
}

module.exports = generateToken