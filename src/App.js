
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/cart';
import Loginsignup from './Pages/loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter >
        <Navbar />
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner= {men_banner} Category = "men"/>} />
            <Route path='/wonen' element={<ShopCategory banner= {women_banner} Category = "women"/>} />
            <Route path='/kids' element={<ShopCategory banner= {kids_banner} Category ="kids"/>} />
            <Route path='/product' element={<Product />} >
                <Route path=':productId' element={<Product />}></Route>
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
