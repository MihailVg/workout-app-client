import { $axios } from '../api'

const USERS = '/users'

class userService {
  async getProfile() {
      return $axios.get(`${USERS}/profile`)
  }
}

export default new userService()