import React from 'react';
import Home from './pages/Home';
import { BrowserRouter,NavLink,Route,Routes } from 'react-router-dom';
import Product from './components/product/ProductContainer'
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Resource from './pages/Resource/Resource';
import ResponsiveBox from './components/features/ResponsiveBox';



const App = () => {
  return (

    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/about" element={<ResponsiveBox/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
