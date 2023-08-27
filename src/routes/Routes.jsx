import { useAuth } from '../hooks/userAuth'

import NotFound from '../components/screens/not-found/Not-found'

import { routes } from './routes.data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						></Route>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
