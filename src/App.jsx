import './App.css'
import { Routes, Route } from 'react-router-dom';
import HeaderMenu from './app/layouts/Header';
import Home from './app/views/Home';
import FooterArea from './app/layouts/Footer';
import ProductList from './app/views/ProductList';
import ProductDetail from './app/views/ProductDetail';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:slug" element={<ProductList />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <FooterArea></FooterArea>
    </div>
  )
}

export default App
