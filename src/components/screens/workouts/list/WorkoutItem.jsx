import styles from '../Workout.module.scss'

const WorkoutItem = ({ workout, createWorkoutLog }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Create new workout'
				onClick={() => createWorkoutLog(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	)
}
export default WorkoutItem
