import axios from 'axios'

export default () => {
    return axios.create({
        /**
         * connect to server 
         */
        baseURL: 'http://localhost:8081/'
    })
}