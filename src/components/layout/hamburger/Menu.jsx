import { useAuth } from '../../../hooks/userAuth'

import { TOKEN } from '../../../app.constanse'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()
	const handleLogout = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
