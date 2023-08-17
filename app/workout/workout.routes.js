import express from 'express'
import {
	createNewWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkouts
} from './workout.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getWorkouts)
router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkouts)
	.delete(protect, deleteWorkout)

export default router
