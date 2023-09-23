import { $axios } from '../../api'

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`/exercises/log/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`/exercises/log/${exerciseId}`)
	}

	async updateTime(timeId, data) {
		return $axios.put(`/exercises/log/time/${timeId}`, data)
	}

	async updateComplete(exerciseLogId, data) {
		return $axios.patch(`/exercises/log/complete/${exerciseLogId}`, data)
	}
}

export default new ExerciseLogService()
