const router = require('express').Router()

const { login, signup, fetchUser} = require('./controllers/auth')
const { createMarker, getAllMarkers } = require('./controllers/marker')

router.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
router.post('/login',  login)
router.post('/signup', signup)
router.post('/fetch-user', fetchUser)

router.get('/marker', getAllMarkers)
router.post('/marker', createMarker)

module.exports = router