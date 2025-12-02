// src/services/api.js
import axios from 'axios';


export const fetchProducts = () => axios.get(`https://exam1-lttd.onrender.com/api/products`);

export const createOrder = (orderData) => {
    console.log(`appel fonction createOrder avec orderData ${JSON.stringify(orderData)}`)
    const token = localStorage.getItem('token'); // Token de connexion
    console.log(`token is ${token}`)
    return axios.post(`https://exam1-lttd.onrender.com/api/orders`, orderData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
