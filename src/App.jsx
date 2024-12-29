import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import AppDownload from './components/AppDownload/AppDownload';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
      <div className='app'>
        {
          showLogin?<LoginPopup showLogin={showLogin} setShowLogin={setShowLogin}/>:<></>
        }
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <AppDownload/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
