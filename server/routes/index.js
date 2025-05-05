import express from 'express'

import { registerController } from './../controllers/index.js'

const router = express.Router()

/** 1. post request to register user  */

router.post('/register', registerController.register)

export default router
