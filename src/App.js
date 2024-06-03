import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kid_banner from './Components/assets/banner_kids.png';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute element={Shop} />
            }
          />
          <Route
            path="/mens"
            element={
              <ProtectedRoute element={() => <ShopCategory banner={men_banner} category="men" />} />
            }
          />
          <Route
            path="/womens"
            element={
              <ProtectedRoute element={() => <ShopCategory banner={women_banner} category="women" />} />
            }
          />
          <Route
            path="/kids"
            element={
              <ProtectedRoute element={() => <ShopCategory banner={kid_banner} category="kid" />} />
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProtectedRoute element={Product} />
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute element={Cart} />
            }
          />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
