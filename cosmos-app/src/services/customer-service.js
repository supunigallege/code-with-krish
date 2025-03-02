import axios from 'axios';


const baseUrl = "http://localhost:3002/customers"; 


function CreateCustomer(customer) {
    return axios.post(`${baseUrl}/createCustomer`, customer);  
}

function GetCustomers() {
    return axios.get(baseUrl);  
}

export { CreateCustomer, GetCustomers };
