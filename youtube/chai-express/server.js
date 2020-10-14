let express = require('express')

let app = express()
app.listen(3000)

app.get('/welcome', (request, response) => {
    response.sendFile(__dirname + '/welcome.html')
})

/* app.get('/hello', (request, response) => {
    response.send('Hello World')
}) */

/* let profiles = {
    'kris' : {name: 'Kris', age: 35},
    'lucy' : {name: 'Lucy', age: 28}
}
 */
/* app.get('/profile', (request, response) => {
    let name = request.query.name
    if(profiles[name]){
        response.json(profiles[name])
    }else{
        response.send('Not Found')
    }
})

module.exports = app */
