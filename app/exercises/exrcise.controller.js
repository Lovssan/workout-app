import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'

export const getExercise = asyncHandler(async (req, res) => {
	const { name } = req.body
	const exercise = await prisma.exercise.findFirst({
		where: {
			name
		}
	})

	res.json(exercise)
})

export const registerExercise = asyncHandler(async (req, res) => {
	const { name, images } = req.body
	const isHaveExercise = await prisma.exercise.findFirst({
		where: {
			name
		}
	})

	if (isHaveExercise) {
		res.status(400)
		throw new Error('Exercise already exists')
	}

	const exercise = await prisma.exercise.create({
		data: {
			name,
			images
		}
	})

	res.json(exercise)
})
