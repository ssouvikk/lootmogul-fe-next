import Configs from '@/Config';
import axios from 'axios'

axios.defaults.baseURL = Configs.API_ROOT
axios.interceptors.response.use(
    (resp) => {
        const { message, status } = resp.data
        if (status >= 200 && status < 300 && message) console.log(message)
        return resp;
    },
    (error) => {
        if (error && error.response) {
            const { data } = error.response;
            if (data.status >= 400 && data.message) console.log(data.message, 'Toast Service')
            if (data.status === 401) console.log('Store.dispatch(Logout())')
            return Promise.reject(data);
        }
    }
);

export default axios