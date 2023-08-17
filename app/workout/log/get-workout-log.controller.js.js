import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'
import { getMinutes } from '../calculate-minutes.js'

export const getWorkoutLog = asyncHandler(async (req, res) => {
	const workoutLog = await prisma.workoutLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			workout: {
				include: {
					exercises: true
				}
			},
			exerciseLogs: {
				orderBy: {
					id: 'asc'
				},
				include: {
					exercise: true
				}
			}
		}
	})

	if (!workoutLog) {
		res.status(404)
		throw new Error('Workout Log not found')
	}

	res.json({
		...workoutLog,
		minute: getMinutes(workoutLog.workout.exercises.length)
	})
})
