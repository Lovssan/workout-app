import styles from '../ExerciseLog.module.scss'
import { heads } from '../exercise.constance'

const TableHeader = () => {
	return (
		<div className={styles.row}>
			{heads.map((head, i) => (
				<div key={i}>
					<span>{head}</span>
				</div>
			))}
		</div>
	)
}
export default TableHeader
