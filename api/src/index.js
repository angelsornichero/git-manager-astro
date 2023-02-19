import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import './db/db.js'
import router from './router/routes.js'

// authenticated()
const app = express()

// Start env
dotenv.config()

// App config
app.set('port', process.env.PORT || 5000)

// App middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

// App listening
app.listen(app.get('port'), () => console.log('Listening on port: ', app.get('port')))