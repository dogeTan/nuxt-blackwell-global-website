import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.baseURL = 'mysql://root:@localhost:3309/your_db'
    axios.defaults.withCredentials = false;
    axios.defaults.proxy = false;
    if(process.client){
        const token = window.localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }
    return {
        provide: { 
            axios: axios
        },
    }
})
