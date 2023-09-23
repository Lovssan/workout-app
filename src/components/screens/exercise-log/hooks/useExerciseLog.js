import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import exercisesLogService from '../../../../services/exercises/exercises-log.service'

export const useExerciseLog = () => {
	const { id } = useParams()
	const { data, isSuccess, isLoading } = useQuery(
		['get exercise log', id],
		() => exercisesLogService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return { data, isSuccess, isLoading }
}
