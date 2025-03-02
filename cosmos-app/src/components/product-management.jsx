import React, { useState, useEffect } from 'react';
import { CreateProduct, GetProducts } from '../services/product-service'; 

export default function ProductManagement() {
  const [products, setProducts] = useState([]); 
  const [name, setName] = useState(''); 
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(''); 

 
  useEffect(() => {
    fetchProducts();
  }, []);

  
  const fetchProducts = async () => {
    try {
      const response = await GetProducts(); 
      setProducts(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, description };
    await CreateProduct(newProduct); 
    setName('');
    setPrice('');
    setDescription('');
    fetchProducts(); 

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>

     
      <h2>All Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description ? product.description : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    }
        }
