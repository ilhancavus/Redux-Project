import axios from "axios";

const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default request;
