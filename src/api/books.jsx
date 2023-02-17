import { axiosEx as axios} from './axios'

class api {
    static a = "/api/books"

    static login = (id, password) => {
        const url = '/login/signin'
        let data = {
            memberId: id,
            memberPw: password
        }

        return axios({ method: 'post', url: api.a + url, data: data})
    }

    static home = () => {
        const url = '/home'
        let data = {}

        return axios({ method: 'post', url: api.a + url, data: data})
    }
}

export default api