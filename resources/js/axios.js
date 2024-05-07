import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${window.BASE_URL}`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default axios;
