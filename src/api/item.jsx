import { axiosEx as axios} from './axios'

class api {
    static characters = () => {
        return axios.get('/shop/user-item?categoryCd=AI')    
    }

    static characterList = () => {
        return axios.get('/shop/user-item?categoryCd=AI')
    }
    static updateCharacterApplcAt = (item) => {
        return axios.post('/shop/characters', {...item})
    }
    static clothList = () => {
        return axios.get('/shop/user-item?categoryCd=CI')
    }
    static currentItemList = () => {
        return axios.get('/shop/user-item?applcAt=Y')
    }
    static updateItemApplcAt = (item) => {
        return axios.post('/shop/user-item', {...item})
    }
}

export default api