import { AiOutlineUser } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/userAuth'

import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()

	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				pathname === '/auth' ? null : (
					<button onClick={() => navigate(!isAuth ? '/auth	' : backLink)}>
						<FiArrowLeft />
					</button>
				)
			) : (
				<button onClick={() => navigate('/profile')}>
					<AiOutlineUser />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
