import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListView from '../d-Pages/product';
import { Hearder } from '../d-Pages/Hearder';
import { Footer } from '../d-Pages/Footer';
import HomeSection from '../d-Pages/home';
import ProductDetail from '../d-Pages/ProductDetails';
import CartPage from '../d-Pages/Cart';
import Register from '../d-Pages/singup';
import Login from '../d-Pages/login';
import Profile from '../d-Pages/Profile';
import AdminDashboard from '../Admin/admin_main';
import Allwish from '../d-Pages/wishPage';

const App = () => {
  return (
    <div className="main-wrapper">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <BrowserRouter>
        <Hearder />
        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/productsview' element={<ProductListView />} />
          <Route path='/productsBroderview' element={<ProductDetail />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<Allwish />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/registr' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;