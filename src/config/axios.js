import axios from "axios";

const success = res => res;

const error = err => err;

axios.interceptors.response.use(success, error);
