let express = require('express')
let app = express()
app.use(express.static('public'))
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

let server = require('http').createServer(app)
let io = require('socket.io')(server)

server.listen(3000)

io.on('connection', (socket) => {

    socket.on('name', (name) => {
        
        socket.emit('welcome', 'Welcome ' + name)
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})