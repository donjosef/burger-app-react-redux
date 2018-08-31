import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-app-9e90a.firebaseio.com/"
});

export default instance;