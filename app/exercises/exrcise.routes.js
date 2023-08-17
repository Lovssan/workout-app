import express from 'express'
import {
	createNewExercise,
	deleteExercise,
	getExercises,
	updateExercises
} from './exrcise.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { createNewExerciseLog } from './log/exercise-log.controller.js'
import { getExerciseLog } from './log/get-exercise-log.controller.js.js'
import {
	updateCompleteExerciseLog,
	updateExerciseLogTime
} from './log/update-exercise-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)
router
	.route('/:id')
	.put(protect, updateExercises)
	.delete(protect, deleteExercise)

router
	.route('/log/:exerciseId')
	.post(protect, createNewExerciseLog)
	.get(protect, getExerciseLog)

router.route('/log/complete/:id').patch(protect, updateCompleteExerciseLog)

router.route('/log/time/:id').put(protect, updateExerciseLogTime)

export default router
