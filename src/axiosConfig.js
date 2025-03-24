import axios from "axios";
const Instance=axios.create({
    baseURL:"https://inventory-management-8mn8.onrender.com",

})
export default Instance;