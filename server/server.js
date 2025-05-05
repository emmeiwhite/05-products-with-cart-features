import express from 'express'

import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

console.log(process.env.APP_PORT)
app.listen(5000, () => {
  console.log(`Server is listening on port : ${5000}`)
})
