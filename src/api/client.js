import axios from 'axios';

const client = axios.create({
    baseURL: 'http://3.35.207.95:8080/v1',
});

export default client;

//env 설정 필요
