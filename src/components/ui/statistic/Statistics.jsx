import { useProfile } from '../../screens/profile/useProfile'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const { data } = useProfile()
	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map(el => (
				<div key={el.label} className={styles.count}>
					<div className={styles.heading}>{el.label}</div>
					<div className={styles.number}>{el.value}</div>
				</div>
			))}
		</div>
	)
}
export default Statistics
