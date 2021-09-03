const User = require('../models/user')
const UserRepository = require('../repositories/userRepository')
const generateToken = require('../utils/generateToken')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const { username, password } = req.body

    try {
        await UserRepository.findUserByCreds(username, password)
        .then((user) => {

            let token = generateToken(user)
            
            return res.status(200).json({
                token,
                user: {
                    username: user.username,
                    name: user.name
                }
            })
        }).catch(e => {
            throw e
        })

    } catch (e) {
        console.log('Error',e)
        return res.status(406).json({ message: e})
    }


}

const signup = async (req, res) => {
    const { username, name, password } = req.body

    let newUser = new User({
        username,
        name,
        password
    })

    try {
        await newUser.save().then(() => {
            res.status(200).json({ message: 'Create user successful' })
        }).catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    } catch (e) {
        res.status(500).json({message: 'Something went wrong'})
    }

}

const fetchUser = async (req, res) => {
    const token = req.headers.authorization.replace('Bearer ', '')
    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        await UserRepository.findUserById(verifyToken.data._id).then(data => {
            res.status(200).json({ name: data.name, username: data.username })
        }).catch(e => {
            console.log('dick')
        })

    } catch (e) {
        return res.status(406).json({ message: 'INVALID_TOKEN' })
    }

    
}


module.exports = {
    login,
    signup,
    fetchUser
}