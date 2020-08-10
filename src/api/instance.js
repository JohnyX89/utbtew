import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://exercise.cngroup.dk/api/'
});

export default Api;