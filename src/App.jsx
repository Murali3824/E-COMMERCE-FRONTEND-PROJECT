import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home'
import Collection from './pages/Collection';
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup.jsx';
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart.jsx';
import Orders from './pages/Orders'
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=''>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;