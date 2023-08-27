import { $axios } from '../../api'

class ExerciseService {
	async getAll() {
		return $axios.get(`/exercises`)
	}

	async create(data) {
		return $axios.post(`/exercises`, data)
	}

	async delete(id) {
		return $axios.delete(`/exercises/${id}`)
	}

	async update(id, data) {
		return $axios.put(`/exercises/${id}`, data)
	}
}

export default new ExerciseService()
