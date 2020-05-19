import axios from "axios";
import MOCKDATA from "../assets/json/MOCK_DATA.json";

const URL_BASE = "https://jsonplaceholder.typicode.com";
const URL_WEATHER = "https://dark-sky.p.rapidapi.com";

const axiosWeatherInstance = axios.create({
  baseURL: URL_WEATHER,
  mode: "cors",
  method: "GET",
  headers: {
    "x-rapidapi-host": "dark-sky.p.rapidapi.com",
    "x-rapidapi-key": "ff7e23fb6amshba5a202af5c0266p1c432fjsn5b71a1a1d3af"
  }
});

const axiosInstance = axios.create({
  baseURL: URL_BASE,
  mode: "cors"
});

export default {
  meetups: {
    fetch: () =>
      new Promise(res => {
      console.log("...fetch mock data.");
      setTimeout(() => {
        res(MOCKDATA);
      }, 2000);
    }),
    create: values => new Promise(res => {
        console.log("...create meetup simulation.");
        setTimeout(() => {
          res(values);
        }, 2000);
      })
  },
  weather: {
    fetchByDate: date => axiosWeatherInstance.get(`/-34.6131500,-58.3772300,${date}`)
  },
  auth: {
    login: data =>
      new Promise(res => {
      const { username, password, remember } = data;
      console.log("...do login simulation.");
      setTimeout(() => {
        if (username === "admin" && password === "1234") {
          res({ id: 1, username, logged: remember });
        } else {
          res({
            message: "User or Password are incorrect"
          });
        }
      }, 2000);
    })
  }
};
