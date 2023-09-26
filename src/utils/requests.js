import axios from 'axios';


const request = axios.create({
    baseURL: 'http://localhost:3000',
})

export const get = async (url, options = {}) => {
    const res = await request.get(url, options);
    return res.data;
}

export const post = async (url, data, options = {}) => {
    const res = await request.post(url, data, options);
    return res.data;
}

export const deleteMethod = async (url, data, options = {}) => {
    const res = await request.delete(url, data, options);
    return res.data;
}
export default request;