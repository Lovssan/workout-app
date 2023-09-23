import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from '../Workout.module.scss'

const ExerciseItem = ({ exLog }) => {
	const navigate = useNavigate()
	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exLog?.isCompleted
			})}
		>
			<button
				aria-label='Move to exerecise'
				onClick={() => navigate(`/exercise/${exLog.id}`)}
			>
				<span>{exLog.exercise.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exLog.exercise.iconPath}
					alt='iconPath'
				/>
			</button>
		</div>
	)
}
export default ExerciseItem
