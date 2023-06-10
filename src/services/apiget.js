import axios from "axios";

const apiget = axios.create({
    baseURL:"https://dslistbackend-production.up.railway.app/lists/"
  // baseURL:"http://localhost:8080/buscar"
   //baseURL:"http://localhost:8080/games"
});



export default apiget;