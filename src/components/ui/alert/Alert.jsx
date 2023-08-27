import styles from './Alert.module.scss'
import cn from 'clsx'

const Alert = ({ type = 'succes', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}
export default Alert
