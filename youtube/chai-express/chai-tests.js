let app = require('./server')
let chai = require('chai')
let chaiHttp = require('chai-http')

chai.use(chaiHttp)

let profiles = {
    'kris' : {name: 'Kris', age: 35},
    'lucy' : {name: 'Lucy', age: 28}
}

let name = 'lucy'

chai.request(app)
    .get('/profile?name=' + name)
    .end((error, response) => {
        if(!profiles[name]){
            chai.assert.equal(response.text, 'Not Found')
        }else{
            let responseObject = JSON.parse(response.text)
            chai.assert.equal(responseObject.name, profiles[name].name)
            chai.assert.equal(responseObject.age, profiles[name].age)
        }
        console.log('All Tests Passed')
        return
    })


/*
chai.request(app)
    .get('/hello')
    .end((error, response) => {
        if(error){
            console.log(error)
        }else{
            chai.assert.equal(response.status, 201, 'Response was not OK')
            chai.assert.equal(response.text, 'Hello World', 'Response did not have the right text')
            console.log('All tests have passed :)')
            return
        }
    })
*/
  
