let bcrypt = require('bcrypt')

let input = 'dog'
let saltRounds = 8

let salt = bcrypt.genSaltSync(8)
console.log('\nSalt : ' + salt)

let hash = bcrypt.hashSync(input, salt)
console.log('\nHash : ' + hash)

let result = bcrypt.compareSync('cat', hash)
console.log('\n' + result + '\n')