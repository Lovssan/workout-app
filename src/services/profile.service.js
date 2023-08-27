import { $axios } from '../api'

class ProfileService {
	async getProfile() {
		return $axios.get(`/users/profile`)
	}
}

export default new ProfileService()
