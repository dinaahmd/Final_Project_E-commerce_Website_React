import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { ProductForm } from './components/ProductForm';
import { NotFound } from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import { createContext, useState } from 'react';
import Admin_products from './components/Admin_products';

// export let usernameContext = createContext();

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
      {/* <usernameContext.Provider value={Username}> */}
      {
        isLoggedIn ?  <MyNav changable={Username} /> : <MyNav changable={"Login"} />
      }
      {/* </usernameContext.Provider> */}
      
      {/* {
        userCategory === "client" ? 
      } */}
      
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login onLogin={handelLogin} />} />
        <Route path='register' element={<Register />} />
        {
          isLoggedIn && userCategory === "administrator" ? 
            <Route path='products' element={<Admin_products />} />
            : isLoggedIn && userCategory === "client" ?             
              <Route path='products' element={<Products />} /> 
              : <Route path='products' element={<Login onLogin={handelLogin} />} />

        }
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
