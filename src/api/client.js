import axios from "axios";

// ${import.meta.env.VITE_BASE_URL}`
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default client;

//env 설정 필요
