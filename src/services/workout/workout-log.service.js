import { $axios } from '../../api'

class WorkoutService {
	async getById(id) {
		return $axios.get(`/workouts/log/${id}`)
	}

	async create(workoutId) {
		return $axios.post(`/workouts/log/${workoutId}`)
	}

	async updateComplete(workoutLogId) {
		return $axios.patch(`/workouts/log/complete/${workoutLogId}`)
	}
}

export default new WorkoutService()
