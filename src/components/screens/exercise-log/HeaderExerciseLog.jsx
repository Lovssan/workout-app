import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/header'
import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ data, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url('/images/ex-bg-1.jpg')`, height: 300 }}
		>
			<Header
				backLink={isSuccess ? `/workout/${data?.workoutLog}` : '/workouts'}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={import.meta.env.VITE_SERVER_URL + data?.exercise.iconPath}
						height='34'
						alt='icon'
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{data?.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}
export default HeaderExerciseLog
