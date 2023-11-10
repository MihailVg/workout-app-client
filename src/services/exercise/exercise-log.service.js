import { $axios } from '../../api'
import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class exerciseLogService {
  async getById(id) {
    return $axios.get(`${LOG}/${id}`)
}

  async create(exerciseId) {
    return $axios.post(`${LOG}/${exerciseId}`)
  }

  async update(timeId, body) {
    return $axios.put(`${LOG}/time/${timeId}`, body)
  }

  async complete(id, body) {
    return $axios.patch(`${LOG}/complete/${id}`, body)
  }
}

export default new exerciseLogService()