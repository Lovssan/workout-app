import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/header'
import Loader from '../../ui/loader/Loader'
import Statistics from '../../ui/statistic/Statistics'
import styles from './Profile.module.scss'
import { useProfile } from './useProfile'
import cn from 'clsx'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url('/images/profile-bg.jpg')` }}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img src='/images/header/user.svg' alt='Profile' height={56} />
							<h1 className={stylesLayout.heading}>{data?.name}</h1>
						</>
					)}
				</div>

				<Statistics statistics={data?.statistics} />
			</div>
			<div className={styles.before_after}>
				{data?.images.map((image, index) => (
					<div key={index} className={styles.center}>
						<h1 className={styles.heading}>
							{index === 0 ? 'Before' : 'After'}
						</h1>
						<img src={image} alt={index === 0 ? 'Before' : 'After'} />
					</div>
				))}
			</div>
		</>
	)
}

export default Profile
