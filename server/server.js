import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { APP_PORT } from './config/index.js'
const app = express()

// To register router & respective routes
import routes from './routes/index.js'
app.use('/api', routes)

// const PORT = process.env.APP_PORT
app.listen(APP_PORT, () => {
  console.log(`Listening on port : ${APP_PORT}`)
})
