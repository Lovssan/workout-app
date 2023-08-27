import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exeercise/New-exercise'
import NewWorkout from '../components/screens/new-workout/New-workout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	}
]
