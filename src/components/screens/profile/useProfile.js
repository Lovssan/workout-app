import ProfileService from '../../../services/profile.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	return useQuery(['get profile'], () => ProfileService.getProfile(), {
		select: ({ data }) => data
	})
}
