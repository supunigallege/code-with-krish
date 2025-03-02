import axios from 'axios';


const baseUrl = "http://localhost:3002/products";  


function CreateProduct(product) {
  return axios.post(`${baseUrl}/createProduct`, product);


function GetProducts() {
  return axios.get(baseUrl);  
}

export { CreateProduct, GetProducts };

}