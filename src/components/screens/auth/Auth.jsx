import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import Layout from '../../layout/Layout'
import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const {
		type,
		register,
		handleSubmit,
		errors,
		isLoading,
		onSubmit,
		toogleTypeLogin,
		password,
		error
	} = useAuthPage()
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/new-exercise-bg.jpg' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<button onClick={toogleTypeLogin} className={styles.sign}>
					{type === 'register' ? 'Sign in' : 'Sign up'}
				</button>
				{error && <Alert type='error' text='Incorrect mail or password' />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='email'
						options={{
							required: 'Email is required',
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: 'Email is not correct'
							}
						}}
						error={errors.email}
						placeholder='Enter email'
					/>

					<Field
						register={register}
						name='password'
						options={{
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password min length 6 symbols'
							}
						}}
						error={errors.password}
						type='password'
						placeholder='Enter password'
					/>

					{type === 'register' && (
						<Field
							register={register}
							name='confirmpwd'
							options={{
								required: 'Confirm is required',
								validate: value =>
									value === password || 'The passwords do not match'
							}}
							error={errors.confirmpwd}
							type='password'
							placeholder='Confirm password'
						/>
					)}
					<div className={styles.wrapperButtons}>
						{type === 'login' ? (
							<Button>{`Sign in`}</Button>
						) : (
							<Button>{`Sign up`}</Button>
						)}
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
