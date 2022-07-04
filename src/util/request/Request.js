import axios from "axios";
const RequestConfig = {
    baseURL: "",
    timeout: 5000,
}
const Request = axios.create(RequestConfig)
export default Request;
