// import { useState } from 'react'
import styles from './Hamburger.module.scss'
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import Menu from './Menu'
import { useOnClickOutside } from '../../../hooks/useOutside'

const Hamburger = () => {
	// const [isShow, setIsShow] = useState(false)
	const { ref, isShow, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <RxCross1 color='white' /> : <HiMenuAlt3 color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
