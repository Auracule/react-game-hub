import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '8864ee238f2b40fe98dbb9ff7ece9826',
    }
})