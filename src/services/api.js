import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.167:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;