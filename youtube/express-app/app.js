let express = require('express')
const { request, response } = require('express')
require('dotenv').config()
let bodyParser = require('body-parser')

let app = express()

app.listen(3000)

let people = {
    'alice' : { name : 'Alice', age : 22},
    'bob' : { name : 'Bob', age : 27},
    'charlie' : {name : 'charlie', age : 25}
}

app.post('/search', bodyParser.urlencoded({ extended: false }), (request, response, next) => {
    let name = request.body.name
    if(people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
} )

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/profile', (request, response) => {
    let name = request.query.name
    if(people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
})

/* app.get('/profile/:name', (request, response) => {
    let name = request.params.name
    if(people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
}) */


/* app.get('/person', (request, response)=> {
    response.json(person)
})



app.use('/pics', express.static(__dirname + '/images'))

app.get('/hello', (request, response, next) => {
    console.log(request.method)
    console.log(request.ip)
    next()
}, (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
 */

