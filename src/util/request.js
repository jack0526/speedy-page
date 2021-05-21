import axios from 'axios';
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});
service.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
service.interceptors.response.use(response => {
    const res = response.data;
    if (res.success) {
        return res;
    }
    else if (res.code === 401) {
        // 认证失败,重置token
    }
    else {
        return Promise.reject(new Error(res.message || 'Error'));
    }
}, error => {
    return Promise.reject(error);
});
//# sourceMappingURL=request.js.map