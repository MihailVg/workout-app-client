import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

class authService {
  async main(email, password, type) {
    try {
      const { data } = await $axios.post(`/auth/${type}`, {
        email,
        password
      })

      if (data.token) Cookies.set(TOKEN, data.token)
      // alert('Success!')
      return data
    } catch (error) {
      // alert('Wrong email or password!')
      throw new Error(error)
    }
  }
}

export default new authService()