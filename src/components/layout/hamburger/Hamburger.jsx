import { useOnClickOutside } from '../../../hooks/useOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'

const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <RxCross1 /> : <HiMenuAlt3 />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
