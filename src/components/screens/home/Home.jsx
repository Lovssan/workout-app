import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Statistics from '../../ui/statistic/Statistics'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const navigate = useNavigate()
	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>

			<h1 className={styles.heading}>Exercises for the shoulders</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
