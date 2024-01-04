
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/cart';
import Loginsignup from './Pages/loginsignup';

function App() {
  return (
    <div >
      <BrowserRouter >
        <Navbar />
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory Category = "men"/>} />
            <Route path='/wonen' element={<ShopCategory Category = "women"/>} />
            <Route path='/kids' element={<ShopCategory  Category ="kids"/>} />
            <Route path='/product' element={<Product />} >
                <Route path=':productId' element={<Product />}></Route>
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Loginsignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
