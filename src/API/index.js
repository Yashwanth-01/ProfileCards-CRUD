import axios from "axios";

// instantiate axios

const UseAxios = axios.create({
    baseURL:'https://q98ze.wiremockapi.cloud/',
    headers:{
        'Content-Type':'application/json'
    }
})
export default UseAxios;