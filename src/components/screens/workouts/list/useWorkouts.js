import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import workoutService from '../../../../services/workout/workout.service'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => workoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess: ({ data }) => navigate(`/workouts/${data.id}`)
		}
	)

	return useMemo(
		() => ({
			data,
			isSuccess,
			mutate,
			isLoading,
			isSuccessMutate,
			error
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[data, isSuccess, isLoading, isSuccessMutate, error]
	)
}
