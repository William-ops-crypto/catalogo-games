import axios from "axios";

const api = axios.create({
   // baseURL:"https://dslistbackend-production.up.railway.app/"
   baseURL:"http://localhost:8080/"
  // baseURL:"http://localhost:8080/"
});




export default api ;