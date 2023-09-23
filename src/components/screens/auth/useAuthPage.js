import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { useAuth } from '../../../hooks/userAuth'

import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
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

	const { mutate, isLoading, error } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(type, email, password),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
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

	return useMemo(
		() => ({
			type,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			toogleTypeLogin,
			password,
			error
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[errors, isLoading, password, type]
	)
}
