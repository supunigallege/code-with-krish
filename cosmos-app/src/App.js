import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import OrderManagement from './components/Order-management';
import CustomerManagement from './components/customer-management';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul className='nav-list'>
              <Navigation nav={"Order Management"} url={"/order-management"} />
              <Navigation nav={"Customer Management"} url={"/customer-management"} />
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Navigation({ nav, url }) {
  return (
    <li className='nav-list'>
      <Link to={url}>{nav}</Link>
    </li>
  );
}

export default App;

