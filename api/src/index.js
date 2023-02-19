import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'
import './db.js'

const app = express()

// App config
app.set('port', process.env.PORT || 5000)

// App middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// App listening
app.listen(app.get('port'), () => console.log('Listening on port: ', app.get('port')))