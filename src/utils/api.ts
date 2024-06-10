import axios from 'axios'

// const baseURL = 'https://admin-jaspharm.soffhub.uz/api/v1'
const baseURL = 'https://jaspharm.pythonanywhere.com/api/v1'


const api = axios.create({
    baseURL
})

api.interceptors.request.use(
    (config) => {

        if (typeof window !== 'undefined') {
            const language = window.localStorage.getItem('i18nextLng');
            if (language) {
                config.headers['Accept-Language'] = language;
            }
        }

        return config
    },
    (error) => Promise.reject(error)
)

export default api