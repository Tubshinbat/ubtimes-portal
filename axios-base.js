import axios from "axios";

const instance = axios.create({
  baseURL: "http://ubtimes.metaldoor.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
