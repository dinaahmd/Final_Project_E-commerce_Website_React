import './App.css';
import { MyNav } from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { ProductForm } from './components/ProductForm';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';
import { About } from './Pages/About';

function App() {
  return (
    <div>
      <MyNav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
