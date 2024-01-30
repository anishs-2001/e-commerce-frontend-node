import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationHandler from './pages/common/registration/RegistrationHandler';
import LoginHandler from './pages/common/login/LoginHandler';
import TopSideNav from './components/TopSideNav/TopSideNav';
import SupplierHandler from './pages/supplier/home/SupplierHandler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginHandler />} />
        <Route path="/registration" element={<RegistrationHandler />} />
        <Route path="/supplier-home" element={<TopSideNav><SupplierHandler /></TopSideNav>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
