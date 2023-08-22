import Header from './header/header'

const Layout = ({ children }) => {
	return (
		<div>
			<Header blackLink='/' />
			{children}
		</div>
	)
}

export default Layout
