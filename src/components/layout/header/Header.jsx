import { AiOutlineUser } from 'react-icons/ai'

import { FiArrowLeft } from 'react-icons/fi'
import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/userAuth'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ blackLink }) => {
	const { isAuth } = useAuth(true)

	return (
		<header className={styles.header}>
			<button onClick={() => (window.location.href = blackLink)}>
				<FiArrowLeft color='white' />
			</button>
			{isAuth ? <AiOutlineUser /> : ''}
			<Hamburger />
		</header>
	)
}

export default Header
