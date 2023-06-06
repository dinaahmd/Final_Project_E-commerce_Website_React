import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProductForm } from './components/ProductForm';
import { NotFound } from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import Store from './components/Store';
import ShoppingCartProvider from "./context/ShoppingCartContext";
import { Footer } from './components/Footer';


function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [Username, setUsername] = useState("");
  let [userCategory, setUserCategory] = useState("");
  let handelLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
    setUserCategory(user.client_admin)
  }

  return (
    <div>
      <ShoppingCartProvider>
        {
        isLoggedIn ?  <MyNav changable={`Welcome, ${Username}`} /> : <MyNav changable={"Login"} />
      }
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products/:id/edit' element={<ProductForm />} />
          <Route path='login' element={<Login onLogin={handelLogin} />} />
          <Route path='register' element={<Register />} />
          {
          isLoggedIn && userCategory === "administrator" ? 
          <Route path='store' element={<Products />} />
          : isLoggedIn && userCategory === "client" ?             
            <Route path='store' element={<Store />} /> 
            : <Route path='store' element={<Login onLogin={handelLogin} />} />
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
