import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { TOKEN } from '../app.constanse'
import { useAuth } from './userAuth'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)

		if (!token) setIsAuth(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth, pathname])
}
