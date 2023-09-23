import Alert from '../../../ui/alert/Alert'
import Loader from '../../../ui/loader/Loader'

import Layout from '../../../layout/Layout'
import styles from '../Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {
	const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
		useWorkouts()

	const createWorkoutLog = id => {
		mutate(id)
	}

	return (
		<>
			<Layout bgImage='/images/ex-bg-2.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' />}
				{isLoading && <Loader />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem
								key={workout.id}
								createWorkoutLog={createWorkoutLog}
								workout={workout}
							/>
						))}
					</div>
				)}
				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}
export default ListWorkouts
