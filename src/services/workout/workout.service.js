import { $axios } from '../../api'

class WorkoutService {
	async getAll() {
		return $axios.get(`/workouts`)
	}

	async create(data) {
		return $axios.post(`/workouts`, data)
	}
	async delete(id) {
		return $axios.delete(`/workouts/${id}`)
	}
}

export default new WorkoutService()
