import exercisesService from '../../../services/exercises/exercises.service'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export const useExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading, error, isSuccess, reset } = useMutation(
		['create exercise'],
		data => exercisesService.create(data),
		{
			onSuccess: () => reset
		}
	)

	const onSubmit = data => {
		mutate(data)
		console.log(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		control,
		isLoading,
		error,
		isSuccess,
		onSubmit
	}
}
