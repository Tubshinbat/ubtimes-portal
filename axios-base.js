import axios from "axios";

const instance = axios.create({
  baseURL: "http://ubtimes.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
