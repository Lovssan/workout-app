import express from 'express'
import { getExercise, registerExercise } from './exrcise.controller.js'

const router = express.Router()

router.route('/addexercise').post(registerExercise)
router.route('/getexercise').post(getExercise)

export default router
