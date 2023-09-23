import cn from 'clsx'

import Loader from '../../../ui/loader/Loader'

import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/header'
import styles from '../Workout.module.scss'

const HeaderWorkout = ({ data, isLoading, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url(${'/images/workout-bg.jpg'})`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />
			{isLoading && <Loader />}
			{isSuccess && (
				<div>
					<time className={styles.time}>{data.minute + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{data.workout?.name}</h1>
				</div>
			)}
		</div>
	)
}
export default HeaderWorkout
