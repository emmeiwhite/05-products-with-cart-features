import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

import { APP_PORT } from './config/index.js'
const app = express()

// const PORT = process.env.APP_PORT
app.listen(APP_PORT, () => {
  console.log(`Listening on port : ${APP_PORT}`)
})
