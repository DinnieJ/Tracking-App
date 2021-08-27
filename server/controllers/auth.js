const User = require('../models/user')
const UserRepository = require('../repositories/userRepository')
const generateToken = require('../utils/generateToken')


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
        return res.status(500).json({ message: e})
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


module.exports = {
    login,
    signup
}