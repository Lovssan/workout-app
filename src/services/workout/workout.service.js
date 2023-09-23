import { $axios } from '../../api'

class WorkoutService {
	async getAll() {
		return $axios.get(`/workouts`)
	}

	async get(id) {
		return $axios.get(`/workouts/${id}`)
	}

	async create(data) {
		return $axios.post(`/workouts`, data)
	}

	async delete(id) {
		return $axios.delete(`/workouts/${id}`)
	}

	async update(id, data) {
		return $axios.put(`/workouts/${id}`, data)
	}
}

export default new WorkoutService()
