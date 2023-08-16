import axios from "axios";

const apiGithub = axios.create({
  baseURL: `http://api.github.com`,
});

export default apiGithub;
