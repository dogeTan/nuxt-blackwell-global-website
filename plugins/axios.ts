import axios from "axios"


export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.baseURL = 'http://root:127.0.0.1:27071/blackwell-global';
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
