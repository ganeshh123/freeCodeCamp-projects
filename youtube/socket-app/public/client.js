let socket = io('http://localhost:3000/')

socket.on('connect', () => {
    
    let name = prompt('What is our name?')

    socket.emit('name', name)

    socket.on('welcome', (message) => {
        window.alert(message)
    })
})