import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './Pages/Shop';
import  Category from './Pages/Category';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; 




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/mens" element={<Category Category="mens" />} />
          <Route exact path="/womens" element={<Category Category="women" />} />
          <Route exact path="/kids" element={<Category Category="kids" />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path=":productId" element={<products />} />

          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
