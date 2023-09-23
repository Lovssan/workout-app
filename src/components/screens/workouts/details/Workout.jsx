import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router'

import Loader from '../../../ui/loader/Loader'

import workoutLogService from '../../../../services/workout/workout-log.service'
import styles from '../Workout.module.scss'
import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'

const Workout = () => {
	const { id } = useParams()

	const { data, isSuccess, isLoading } = useQuery(
		['get workout', id],
		() => workoutLogService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return (
		<>
			<HeaderWorkout data={data} isSuccess={isSuccess} isLoading={isLoading} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: '90%', paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					{data?.exerciseLogs.map((exLog, index) => (
						<Fragment key={exLog.id}>
							<ExerciseItem exLog={exLog} />
							{index % 2 !== 0 && index !== data.exerciseLogs.length - 1 && (
								<div className={styles.line}></div>
							)}
						</Fragment>
					))}
				</div>
			)}
		</>
	)
}
export default Workout
