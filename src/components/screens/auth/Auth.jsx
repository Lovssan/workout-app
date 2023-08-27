import { useAuth } from '../../../hooks/userAuth'

import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import styles from './Auth.module.scss'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch
	} = useForm({
		mode: 'onChange',
		shouldUnregister: true
	})

	const navigate = useNavigate()

	const { isAuth, setIsAuth } = useAuth()
	useEffect(() => {
		if (isAuth) navigate('/')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(type, email, password),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			},
			onError: () => {
				if (type === 'login') {
					alert('Email or password not correct')
				}
			}
		}
	)

	const password = watch('password')

	const onSubmit = data => {
		mutate(data)
	}

	const toogleTypeLogin = () => {
		if (type === 'register') {
			setType('login')
		} else {
			setType('register')
		}
		reset()
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/new-exercise-bg.jpg' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<button onClick={toogleTypeLogin} className={styles.sign}>
					{type === 'register' ? 'Sign in' : 'Sign up'}
				</button>
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
