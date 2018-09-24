// import Api from '@/services/Api'
import axios from 'axios'
export default {
  register(credentials){
    return axios.create({
      baseURL:`http://localhost:3000/`
    }).post('register',credentials)
  }
}
// AuthenticationService.regiter({
//   email:'minhhieuuet@gmail.com',
//   password:'123456'
// })
