const router = require('express').Router()

const { login, signup} = require('./controllers/auth')

router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
router.post('/login',  login)
router.post('/signup', signup)

module.exports = router