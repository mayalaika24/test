import axios from 'axios'
import gc from '../utils/gc'
const baseDomain =  gc.baseURL
const Repository = axios.create({
    baseURL: `${baseDomain}/api`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        version: '1.0.0',
        lang: 'en'
    }
})
Repository.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Repository.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default Repository