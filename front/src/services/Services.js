import axios from "axios";

const URL_BASE = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: URL_BASE,
  mode: "cors"
});

export default {
  meetups: {
    fetch: () => axiosInstance.get("/posts/1/comments")
  }
};
