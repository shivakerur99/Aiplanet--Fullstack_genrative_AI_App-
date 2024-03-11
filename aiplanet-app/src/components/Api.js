import axios from "axios";

const Api=axios.create({
    // baseURL: "http://localhost:8000", for localhost conection using through port
    baseURL:"https://aiplanet-fullstack-genrative-ai-app.onrender.com"
})

export default Api