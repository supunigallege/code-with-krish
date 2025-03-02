import React, { useState, useEffect } from 'react';
import { CreateCustomer, GetCustomers } from '../services/customer-service'; 

export default function CustomerManagement() {
  const [customers, setCustomers] = useState([]); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [address, setAddress] = useState(''); 

 
  useEffect(() => {
    fetchCustomers();
  }, []);

 
  const fetchCustomers = async () => {
    try {
      const response = await GetCustomers(); 
      setCustomers(response.data); 
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = { name, email, address };
    await CreateCustomer(newCustomer); 
    
  };

  return (
    <div>
      <h1>Customer Management</h1>

      
      <h2>Create Customer</h2>
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit">Create Customer</button>
      </form>

     
      <h2>All Customers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}> 
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.address ? customer.address : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


