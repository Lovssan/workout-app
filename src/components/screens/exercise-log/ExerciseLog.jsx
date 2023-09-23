import cn from 'clsx'
import { useParams } from 'react-router-dom'

import ExerciseError from './hooks/ExerciseError'
import { useExerciseLog } from './hooks/useExerciseLog'

import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/loader/Loader'

import stylesLayout from '../../layout/Layout.module.scss'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'

const ExerciseLog = () => {
	const { data, isLoading, isSuccess } = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog data={data} isSuccess={isSuccess} />
			<div
				className='inner-wrapper-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ExerciseError errors={[errorChange, errorCompleted]} /> */}
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{data?.times.map((item, index) => (
							<div key={item + index}></div>
						))}
					</div>
				)}
				{isSuccess && data?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}
export default ExerciseLog
