import axios from "axios";

const userApi = axios.create({
    baseURL: `https://localhost:5001`,
  });

export default userApi;