import axios from "axios";
//dropbox-leo.herokuapp.com

export const Api = axios.create({
  baseURL: "https://dropbox-leo.herokuapp.com"
});

export default Api;
