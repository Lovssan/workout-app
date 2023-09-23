import exercisesService from '../../../services/exercises/exercises.service'
import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading, error, isSuccess } = useMutation(
		['create exercise'],
		data => exercisesService.create(data),
		{
			onSuccess: () => reset()
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isLoading,
			error,
			isSuccess,
			onSubmit
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[errors, isLoading, error, isSuccess]
	)
}