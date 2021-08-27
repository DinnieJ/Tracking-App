require('dotenv').config(`${__dirname}/.env`)

const express = require('express')
const compression = require('compression')
const { urlencoded } = require('body-parser')
const cors = require('cors')

const app = express()


//socket
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)

const route = require('./route')


app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(compression())
app.use(cors())
app.use('/', route)
require('./db/mongodb')()

io.on('connection', (socket) => {
    console.log('user connected')
})

server.listen(3000, () => console.log('Server is listening at 3000'))