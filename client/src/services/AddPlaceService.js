import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
// AuthenticationServise({
//  email: 'testing@gmail.com',
//  password: '123456'
// })
