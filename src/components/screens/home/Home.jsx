import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Statistics from '../../ui/statistic/Statistics'

import Layout from '../../layout/Layout'
import styles from './Home.module.scss'

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
