import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import WorkoutService from '../../../services/workout/workout.service'

export const useWorkout = () => {
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
		['create workout'],
		data => WorkoutService.create(data),
		{
			onSuccess: () => reset({ name: '', exerciseIds: [] })
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
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
