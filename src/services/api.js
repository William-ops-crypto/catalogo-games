import axios from "axios";

const api = axios.create({
   // baseURL:"https://dslistbackend-production.up.railway.app/games"
   baseURL:"http://localhost:8080/buscar"
   //baseURL:"http://localhost:8080/games"
});


export default api;