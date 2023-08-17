import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

export const updateWorkoutLog = asyncHandler(async (req, res) => {
	try {
		const workoutLogTime = await prisma.workoutLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: true
			}
		})

		res.json(workoutLogTime)
	} catch (error) {
		res.status(404)
		throw new Error('Workout Log time not found')
	}
})
