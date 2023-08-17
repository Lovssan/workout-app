import express from 'express'
import authRoutes from './app/auth/auth.routes.js'
import 'colors'
import 'dotenv/config'
import morgan from 'morgan'
import { prisma } from './app/prisma.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import bodyParser from 'body-parser'
import userRouter from './app/user/user.routes.js'
import exerciseRouter from './app/exercises/exrcise.routes.js'
import path from 'path'
import workoutRouter from './app/workout/workout.routes.js'
import cors from 'cors'

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'))
	}

	app.use(cors())
	app.use(bodyParser.json())

	const __dirname = path.resolve()

	app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRouter)
	app.use('/api/exercises', exerciseRouter)
	app.use('/api/workouts', workoutRouter)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
