import axios from 'axios'

const baseUrl = "http://localhost:3000/orders";

function CreateOrder(order){
    return axios.post(`${baseUrl}/createOrder`, order);
}

function GetOrders(){
    return axios.get(baseUrl);
}

export {CreateOrder, GetOrders}