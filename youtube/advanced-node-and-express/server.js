let express = require('express')
let app = express()
let dotenv = require('dotenv').config()
let pug = require('pug')
let session = require('express-session')
let passport = require('passport')
let LocalStrategy = require('passport-local')
let ObjectId = require('mongodb').ObjectID
let mongo = require('mongodb').MongoClient
let bodyParser = require('body-parser')
const { response } = require('express')
let bcrypt = require('bcrypt')

app.set('view engine', 'pug')
app.set('views', './pages')

app.use(session({
    secret: 'sdufg',
    resave: true,
    saveUninitialized: true
}), passport.initialize(), passport.session())

let uri = 'mongodb+srv://user1:' + process.env.PW + '@freecodecamp.b0myq.mongodb.net/localdb?retryWrites=true&w=majority'

mongo.connect(uri, (error, client) => {
    if(error){
        console.log(error)
    }else{
        let db = client.db('localdb')
        app.listen(3000)

        app.get('/', (request, response) => {
            request.session.count ++
            response.render('homepage', {message: 'Please Sign in or Register'})
        })

        /* Save User Id to a cookie */
        passport.serializeUser((user, done ) => {
            done(null ,user._id)
        })

        /* Retrieve User details from cookie */
        passport.deserializeUser((userId, done) => {
            db.collection('users').findOne(
                {_id: new ObjectId(userId)},
                (error, doc) => {
                    done(null, doc)
                }
            )
        })

        let findUserDocument = new LocalStrategy(
            (username, password, done) => {
                db.collection('users').findOne(
                    {username: username},
                    (err, user) => {
                        if(err){
                            return done(err)
                        }else if(!user){
                            done(null, false)
                        }else if(!bcrypt.compareSync(password, user.password)){
                            done(null, false)
                        }else{
                            done(null, user)
                        }
                    }
                )
            }
        )

        passport.use(findUserDocument)
        
        app.post('/login',
            bodyParser.urlencoded({ extended: false }),
            passport.authenticate('local', {failureRedirect: '/'}),
            (request, response) => {
                response.redirect('/profile')
            }
        )

        let isSignedIn = (request, response, next) => {
            if(request.isAuthenticated()){
                next()
            }else{
                response.redirect('/')
            }
        }

        app.get('/profile', isSignedIn, (request, response) => {
            response.render('profile', 
            {
                name: request.user.name,
                bio: request.user.bio,
                pic: request.user.pic
            })
        })

        app.get('/logout', (request, response) => {
            request.logOut()
            response.redirect('/')
        })

        app.post('/register',
            bodyParser.urlencoded({extended: false}),
            (request, response, next) => {
                /* Check if user exists */
                db.collection('users').findOne(
                    {username: request.body.username},
                    (error, user) => {
                        if(!error && user){
                            response.redirect('/')
                        }
                    }
                )

                /* Create User Document */
                let hash = bcrypt.hashSync(input, 12)
                db.collection('users').insertOne(
                    {
                        username: request.body.username,
                        password: hash,
                        name: request.body.name,
                        bio: request.body.bio,
                        pic: request.body.pic
                    },
                    (error, createdUser) => {
                        if(!error && createdUser){
                            next()
                        }
                    }
                )
            },
            passport.authenticate('local', {failureRedirect: '/'}),
            (request, response) => {
                response.redirect('/profile')
            }
        )

        app.use((request, response) => {
            response.status(404)
                .type('text')
                .send('Not Found')
        })
    }
})
