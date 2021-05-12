import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default baseUrl;
