let chai = require('chai')
class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
    }
}
let tiger = new Animal('Tiger', 'Mammal')

chai.assert.notInstanceOf(tiger, Date, 'Tiger is not an Animal')
console.log('All tests passed')