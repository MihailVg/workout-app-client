import { $axios } from '../../api'

import { WORKOUTS } from './workout.service'

const LOG = `${WORKOUTS}/log`

class workoutLogService {
  async getById(id) {
    return $axios.get(`${LOG}/${id}`)
  }

  async create(workoutId) {
    const res = await $axios.post(`${LOG}/${workoutId}`)
    return res
  }

  async complete(id) {
    return $axios.patch(`${LOG}/complete/${id}`)
  }
}

export default new workoutLogService()